"use client";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NavBarBack = ({ children }) => {
  return (
    <nav className="dark:bg-[hsl(200,6%,10%)] capitalize max-sm:border-b sm:mb-2 bg-white sm:rounded-md flex gap-3 items-center p-3">
      <Link href="/">
        <FaArrowLeft />
      </Link>
      <div className="text-lg font-[600]">{children}</div>
    </nav>
  );
};

export default NavBarBack;
