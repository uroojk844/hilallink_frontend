"use client";
import { GoHomeFill } from "react-icons/go";
import {
  BsBellFill,
  BsChatDots,
  BsChatDotsFill,
  BsPlusCircle,
  BsSearch,
} from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";

import dynamic from "next/dynamic";
import { FaBars, FaMosque } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
const SideBar = dynamic(() => import("./SideBar"));
const EditProfile = dynamic(() => import("./Navbar/EditProfile"));
const SwicthProfile = dynamic(() => import("./Navbar/SwicthProfile"));
const Login = dynamic(() => import("@/components/Auth/Login"));
const Signup = dynamic(() => import("@/components/Auth/Signup"));

const NavBar = () => {
  const editProfile = useSelector((state) => state.togglesSlice.editProfile);
  const switchAccount = useSelector(
    (state) => state.togglesSlice.switchProfile
  );
  const activeTab = usePathname();
  return (
    <div className={"bg-white dark:bg-[hsl(200,6%,10%)] sticky top-0 z-40"}>
      <section className="container mx-auto  max-sm:border-b">
        <nav className="relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div
            className={
              "text-gray-400 dark:text-[#afa99e]z-40 absolute left-1/2 -translate-x-1/2 flex items-center justify-between lg:max-w-md text-xl w-full bg-white dark:bg-[hsl(200,6%,10%)] navbar"
            }
          >
            <Link href="/">
              <GoHomeFill
                size={26}
                className={twMerge(
                  "dark:text-[#afa99e]",
                  activeTab == "/" && "text-black dark:text-white/95"
                )}
              />
            </Link>
            <Link
              href="/search"
              className={twMerge(
                "dark:text-[#afa99e]",
                activeTab == "/search" && "text-black dark:text-white/95"
              )}
            >
              <BsSearch />
            </Link>
            <Link
              href=""
              className={twMerge("sm:hidden text-black dark:text-[#afa99e]")}
            >
              <BsPlusCircle size={30} />
            </Link>
            <Link
              href="/ibadat"
              className={twMerge(
                "dark:text-[#afa99e]",
                activeTab == "/ibadat" && "text-black dark:text-white/95"
              )}
            >
              <FaMosque size={26} />
            </Link>
            <Link
              href="/chats"
              className={twMerge(
                "max-sm:hidden dark:text-[#afa99e]",
                activeTab == "/chats" && "text-black dark:text-white/95"
              )}
            >
              <BsChatDotsFill size={22} />
            </Link>
            <Link
              href="/notifications"
              className={twMerge(
                "max-sm:hidden dark:text-[#afa99e]",
                activeTab == "/notifications" && "text-black dark:text-white/95"
              )}
            >
              <BsBellFill size={22} />
            </Link>
            <div className="sm:hidden dark:text-[#afa99e] text-black">
              <FaBars size={22} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/notifications"
              className={twMerge(
                "sm:hidden dark:text-[#afa99e]",
                activeTab == "/" && "text-black dark:text-white/95"
              )}
            >
              <BsBellFill size={22} />
            </Link>
            <Link
              href="/chats"
              className={twMerge(
                "sm:hidden dark:text-[#afa99e]",
                activeTab == "/chats" && "text-black dark:text-white/95"
              )}
            >
              <BsChatDots size={22} />
            </Link>
            <div className="max-sm:hidden text-black dark:text-[#afa99e]">
              <FaBars size={22} />
            </div>

            <SideBar />
          </div>
        </nav>
      </section>
      {switchAccount && <SwicthProfile />}
      {editProfile && <EditProfile />}
    </div>
  );
};

export default NavBar;
