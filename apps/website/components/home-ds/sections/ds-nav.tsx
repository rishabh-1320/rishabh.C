import { homeContent } from "@/lib/site-content";
import { NavBar } from "../ui/nav-bar";

export function DsNav() {
  return <NavBar resumeUrl={homeContent.resumeUrl} />;
}
