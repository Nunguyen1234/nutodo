"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h1>Chào mừng, {user?.email}</h1>
      <button
        onClick={() => {
          localStorage.clear();
          router.push("/login");
        }}
      >
        Đăng xuất
      </button>
    </div>
  );
}
