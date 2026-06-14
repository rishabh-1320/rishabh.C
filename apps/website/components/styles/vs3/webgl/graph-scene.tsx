"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * GraphScene — the workweave signature: an animated 3D node/edge graph
 * ("every contribution unified under one graph"). Nodes drift, edges glow in
 * the data-viz palette, the whole field slowly rotates with subtle mouse
 * parallax. Pure R3F/three; colors are intrinsic to the visual (exempt from
 * drift-lint, like a primitive). Density scales down on small screens.
 */

const VIZ = ["#3B7DD8", "#E8924A", "#6B5FD0", "#2BAD8A", "#C95C8E", "#EC6341"];

type SceneProps = { density?: number };

function seededRand(i: number) {
  // deterministic pseudo-random (no Math.random → stable SSR/first frame)
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function Graph({ count }: { count: number }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const { nodes, colors, lineSegments } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      const r = 2.2 + seededRand(i) * 1.6;
      const theta = seededRand(i * 2.3) * Math.PI * 2;
      const phi = Math.acos(2 * seededRand(i * 4.1) - 1);
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.6,
          r * Math.cos(phi)
        )
      );
    }
    const colors = nodes.map((_, i) => new THREE.Color(VIZ[i % VIZ.length]));
    // connect each node to ~2 nearest neighbours → one LineSegments object
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const dists = nodes
        .map((n, j) => ({ j, d: nodes[i].distanceTo(n) }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of dists) {
        if (j <= i) continue;
        positions.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#1A1512"),
      transparent: true,
      opacity: 0.12
    });
    const lineSegments = new THREE.LineSegments(geo, mat);
    return { nodes, colors, lineSegments };
  }, [count]);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    pointer.current.x += (state.pointer.x - pointer.current.x) * 0.04;
    pointer.current.y += (state.pointer.y - pointer.current.y) * 0.04;
    group.current.rotation.x = pointer.current.y * 0.25;
    group.current.position.x = pointer.current.x * 0.4;
  });

  return (
    <group ref={group}>
      <primitive object={lineSegments} />
      {nodes.map((p, i) => (
        <mesh key={`n${i}`} position={p}>
          <sphereGeometry args={[0.055 + seededRand(i * 7.3) * 0.05, 16, 16]} />
          <meshBasicMaterial color={colors[i]} />
        </mesh>
      ))}
    </group>
  );
}

export default function GraphScene({ density = 1 }: SceneProps) {
  const count = Math.round(40 * density);
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <Graph count={count} />
    </Canvas>
  );
}
