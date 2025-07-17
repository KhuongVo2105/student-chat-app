import { getUserSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  try {
    const session = await getUserSession();
    if (session) {
      redirect("/home");
    }
  } catch (error) {
    console.error("Error fetching user session:", error);
  } finally {
    redirect("/sign-in");
  }
}
