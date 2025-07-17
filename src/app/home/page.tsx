import LogoutButton from "@/components/logout-button";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const HomePage = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>
      <h1>HomePage</h1>
      <LogoutButton />
    </div>
  );
};

export default HomePage;
