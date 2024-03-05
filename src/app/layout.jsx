"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` dark:bg-black/95 grid grid-row-max-auto ${inter.className}`}
      >
        <NextTopLoader showSpinner={false} color="dodgerblue" height={5} />
        <main>
          <GoogleOAuthProvider clientId="521701366257-hqmmimm9u8i70c4s88nnevc4holkkq5p.apps.googleusercontent.com">
            <Provider store={store}>{children}</Provider>
          </GoogleOAuthProvider>
        </main>
      </body>
    </html>
  );
}
// max-w-lg mx-auto w-full
