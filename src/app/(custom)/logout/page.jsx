"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();
    document.cookie = "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/auth/login");
  });
  return <div></div>;
};

export default Logout;
