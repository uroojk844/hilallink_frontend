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
import { dispatch } from "@/redux/store";
import { hideProfile, showProfile } from "@/redux/togglesSlice";
const SideBar = dynamic(() => import("./SideBar"));
const EditProfile = dynamic(() => import("./Navbar/EditProfile"));

const NavBar = () => {
  const editProfile = useSelector((state) => state.togglesSlice.editProfile);
  const sidebar = useSelector((state) => state.togglesSlice.userProfile);
  const activeTab = usePathname();
  return (
    <div className={"bg-white dark:bg-[hsl(0deg_0%_5%)] sticky top-0 z-40"}>
      <section className="container mx-auto  max-sm:border-b">
        <nav className="relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div
            className={
              "text-gray-400 z-40 absolute left-1/2 -translate-x-1/2 flex items-center justify-between lg:max-w-md text-xl w-full bg-white dark:bg-[hsl(0deg_0%_5%)] navbar"
            }
          >
            <Link href="/">
              <GoHomeFill
                size={26}
                className={activeTab == "/" && "text-black dark:text-white/95"}
              />
            </Link>
            <Link href="/search" className="sm">
              <BsSearch
                className={
                  activeTab == "/search" && "text-black dark:text-white/95"
                }
              />
            </Link>
            <Link href="/search" className="sm:hidden">
              <BsPlusCircle
                size={30}
                className={
                  activeTab == "/search" && "text-black dark:text-white/95"
                }
              />
            </Link>
            <Link
              href="/ibadat"
              className={`"max-sm:hidden ${
                activeTab == "/ibadat" && "text-black dark:text-white/95"
              }"`}
            >
              <FaMosque size={26} />
            </Link>
            <Link href="/chats" className="max-sm:hidden">
              <BsChatDotsFill
                size={22}
                className={
                  activeTab == "/chats" && "text-black dark:text-white/95"
                }
              />
            </Link>
            <Link
              href="/notifications"
              className={`max-sm:hidden ${
                activeTab == "/notifications" && "text-black dark:text-white/95"
              }`}
            >
              <BsBellFill size={22} />
            </Link>
            <Link
              href="/sidebar"
              className={`sm:hidden ${
                activeTab == "/sidebar" && "text-black dark:text-white/95"
              }`}
            >
              <FaBars size={22} />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/notifications" className="sm:hidden">
              <BsBellFill size={22} className="text-gray-400" />
            </Link>
            <Link href="/chats" className="sm:hidden">
              <BsChatDots size={22} className="text-gray-400" />
            </Link>
            <div onClick={!sidebar?()=>dispatch(showProfile()):()=>dispatch(hideProfile())} className="max-sm:hidden cursor-pointer">
              <FaBars size={22} className="text-gray-400" />
            </div>

            {sidebar && <SideBar />}
          </div>
        </nav>
      </section>
      {editProfile && <EditProfile />}
    </div>
  );
};

export default NavBar;
