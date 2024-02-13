"use client";
import NavBarBack from "@/components/NavBarBack";
import NavBar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const path = usePathname();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.onresize = () => {
      setWidth(window.innerWidth);
    };
  }, []);

  return (
    <>
      {!path.match(/((chats|shorts)\/.+)/g) && (
        <>
          {width > 600 ? (
            <NavBar />
          ) : (
            <NavBarBack>{path.split("/")}</NavBarBack>
          )}
        </>
      )}
      {children}
    </>
  );
}
