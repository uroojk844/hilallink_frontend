"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    localStorage.getItem("dark-theme") && document.body.classList.add("dark");
    // setDarkTheme(localStorage.getItem("dark-theme") ?? false);
  }, []);

  return (
    <html lang="en">
      <body
        className={` dark:bg-black/95 grid grid-row-max-auto ${inter.className}`}
      >
        <NextTopLoader showSpinner={false} color="dodgerblue" height={5} />
        <main>
          <Provider store={store}>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
// max-w-lg mx-auto w-full
