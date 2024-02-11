"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";
import { usePathname } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  ["/chats", "/shorts"].includes(path);
  return (
    <html lang="en">
      <body className={`grid grid-row-max-auto ${inter.className}`}>
        {!path.match(/((chats|shorts)\/.+)/g) && <NavBar />}
        <NextTopLoader color="dodgerblue" height={5} />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
// max-w-lg mx-auto w-full
