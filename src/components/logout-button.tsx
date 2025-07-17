"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/sign-in");
  };

  return (
    <button onClick={handleLogout} className="text-white bg-red-500 px-4 py-2 rounded">
      Đăng xuất
    </button>
  );
}