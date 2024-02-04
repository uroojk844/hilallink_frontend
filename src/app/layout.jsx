"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Navbar";
import { usePathname } from "next/navigation";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  
  return (
    <html lang="en">
      <Head>
        <title>HilalLink</title>
      </Head>
      <body className={`grid grid-row-max-auto ${inter.className}`}>
        {path != "/shorts" && <NavBar />}

        <main className="max-w-lg mx-auto w-full">{children}</main>
      </body>
    </html>
  );
}
