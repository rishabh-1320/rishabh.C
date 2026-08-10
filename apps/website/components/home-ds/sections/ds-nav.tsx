import { homeContent } from "@/lib/site-content";
import { NavBar } from "../site-components/nav-bar";

export function DsNav() {
  return <NavBar resumeUrl={homeContent.resumeUrl} linkedinUrl={homeContent.footer.linkedinUrl} />;
}
