"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function DriftingObject({ pointer }: { pointer: { x: number; y: number } }) {
  const meshRef = useRef<Mesh | null>(null);

  useFrame((state, delta) => {
    const m = meshRef.current;
    if (!m) return;
    m.rotation.x += delta * 0.18;
    m.rotation.y += delta * 0.12;
    const tx = pointer.x * 0.6;
    const ty = pointer.y * 0.4;
    m.position.x += (tx - m.position.x) * 0.06;
    m.position.y += (ty - m.position.y) * 0.06;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.7}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.6}
          roughness={0.12}
          chromaticAberration={0.08}
          anisotropy={0.4}
          distortion={0.6}
          distortionScale={0.4}
          temporalDistortion={0.18}
          ior={1.35}
          color="#cfeae4"
        />
      </mesh>
    </Float>
  );
}

export function SpatialScene() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setPointer({ x, y });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--spatial-mesh-1)",
          opacity: 0.7
        }}
      />
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#A78BFA" />
      <directionalLight position={[-4, -2, 3]} intensity={1.0} color="#5EEAD4" />
      <directionalLight position={[0, -5, 2]} intensity={0.6} color="#FFD580" />
      <Suspense fallback={null}>
        <DriftingObject pointer={pointer} />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}
