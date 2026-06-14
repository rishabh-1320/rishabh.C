import { redirect } from "next/navigation";

// /vs2 was the pre-promotion experiment route. It is now the canonical site at /.
export default function Vs2Redirect() {
  redirect("/");
}
