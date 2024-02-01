import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HilalLink",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="max-w-md mx-auto">{children}</main>
      </body>
    </html>
  );
}
