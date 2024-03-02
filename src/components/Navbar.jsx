"use client";
import { GoHome, GoHomeFill } from "react-icons/go";
import {
  BsBell,
  BsBellFill,
  BsChatDots,
  BsChatDotsFill,
  BsCompass,
  BsFilm,
  BsPlusCircle,
  BsSearch,
} from "react-icons/bs";
import { LiaMosqueSolid } from "react-icons/lia";
import Link from "next/link";

const ProfileButton = dynamic(() => import("./Navbar/ProfileButton"));
import NotificationsButton from "./Navbar/NotificationsButton";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from "react";
import ForgotPassword from "./Auth/ForgotPassword";
import { fetchUsers } from "@/redux/userSlice";
import { FaBars, FaMosque } from "react-icons/fa";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
const EditProfile = dynamic(() => import("./Navbar/EditProfile"));
const SwicthProfile = dynamic(() => import("./Navbar/SwicthProfile"));
const Login = dynamic(() => import("@/components/Auth/Login"));
const Signup = dynamic(() => import("@/components/Auth/Signup"));

const NavBar = () => {
  const editProfile = useSelector((state) => state.togglesSlice.editProfile);
  const switchAccount = useSelector(
    (state) => state.togglesSlice.switchProfile
  );
  const auth = useSelector((state) => state.togglesSlice.auth);
  const [current, setCurrent] = useState("login");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     dispatch(fetchUsers());
  //   }
  // }, []);

  const menu = {
    login: <Login controller={setCurrent} />,
    signup: <Signup controller={setCurrent} />,
    forgot: <ForgotPassword controller={setCurrent} />,
  };

  const activeTab = usePathname();

  return (
    <>
      <section className="sticky top-0 bg-white z-40 max-sm:border-b">
        <nav className="container relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div className="text-gray-400 z-40 absolute left-1/2 -translate-x-1/2 flex items-center justify-between lg:max-w-md text-xl w-full navbar">
            <Link href="/">
              <GoHomeFill
                size={26}
                className={activeTab == "/" && "text-black"}
              />
            </Link>
            <Link href="/search" className="sm">
              <BsSearch className={activeTab == "/search" && "text-black"} />
            </Link>
            <Link href="/search" className="sm:hidden">
              <BsPlusCircle
                size={30}
                className={activeTab == "/search" && "text-black"}
              />
            </Link>
            <Link
              href="/ibadat"
              className={`"max-sm:hidden ${
                activeTab == "/ibadat" && "text-black"
              }"`}
            >
              <FaMosque size={26} />
            </Link>
            <Link href="/chats" className="max-sm:hidden">
              <BsChatDotsFill
                size={22}
                className={activeTab == "/chats" && "text-black"}
              />
            </Link>
            <Link
              href="/notifications"
              className={`max-sm:hidden ${
                activeTab == "/notifications" && "text-black"
              }`}
            >
              <BsBellFill size={22} />
            </Link>
            <Link
              href="/sidebar"
              className={`sm:hidden ${activeTab == "/sidebar" && "text-black"}`}
            >
              <FaBars size={22} />
            </Link>
            <SideBar />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/notifications" className="sm:hidden">
              <BsBellFill size={22} className="text-gray-400" />
            </Link>
            <Link href="/chats" className="sm:hidden">
              <BsChatDots size={22} className="text-gray-400" />
            </Link>
            <Link href="/chats" className="max-sm:hidden">
              <FaBars size={22} className="text-gray-400" />
            </Link>
          </div>
        </nav>
      </section>
      {switchAccount && <SwicthProfile />}
      {editProfile && <EditProfile />}
      {auth && (
        <div className="inset-0 fixed glass z-50 grid place-items-center">
          {menu[current]}
        </div>
      )}
    </>
  );
};

export default NavBar;
