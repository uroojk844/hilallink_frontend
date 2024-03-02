"use client";
import { GoHome } from "react-icons/go";
import {
  BsChatDots,
  BsCompass,
  BsFilm,
  BsPlusCircle,
  BsSearch,
} from "react-icons/bs";
import Link from "next/link";

const ProfileButton = dynamic(() => import("./Navbar/ProfileButton"));
import NotificationsButton from "./Navbar/NotificationsButton";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import ForgotPassword from "./Auth/ForgotPassword";
import { fetchUsers } from "@/redux/userSlice";
const EditProfile = dynamic(() => import("./Navbar/EditProfile"));
const SwicthProfile = dynamic(() => import("./Navbar/SwicthProfile"));
const Login = dynamic(() => import("@/components/Auth/Login"));
const Signup = dynamic(() => import("@/components/Auth/Signup"));

const NavBar = () => {
  const editProfile = useSelector((state) => state.togglesSlice.editProfile);
  const switchAccount = useSelector(
    (state) => state.togglesSlice.switchProfile
  );
  const loadingUser = useSelector((state) => state.userSlice.loading);
  const auth = useSelector((state) => state.togglesSlice.auth);
  const [current, setCurrent] = useState("login");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(fetchUsers());
    }
  }, []);

  const menu = {
    login: <Login controller={setCurrent} />,
    signup: <Signup controller={setCurrent} />,
    forgot: <ForgotPassword controller={setCurrent} />,
  };

  return (
    <div className="bg-white sticky top-0 z-40">
      <section className="container mx-auto  max-sm:border-b">
        <nav className="relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div className="z-40 absolute left-1/2 -translate-x-1/2 flex items-center justify-between lg:max-w-md text-xl w-full navbar">
            <Link href="/">
              <GoHome size={24} />
            </Link>
            <Link href="/shorts">
              <BsFilm />
            </Link>
            <Link href="" className="sm:hidden">
              <BsPlusCircle size={30} />
            </Link>
            {/* <Link href="/ibadat" className="max-sm:hidden">
              <LiaMosqueSolid size={28} />
            </Link> */}
            <Link href="/chats" className="max-sm:hidden">
              <BsChatDots />
            </Link>
            <Link href="/search" className="sm:hidden">
              <BsSearch />
            </Link>
            <Link href="/search" className="max-sm:hidden">
              <BsCompass />
            </Link>
            <div className="sm:hidden">
              {
                loadingUser ?<ProfileButton />:"Loading"
              }
            </div>
          </div>
          <div className="flex items-center gap-4">
            <NotificationsButton />
            <div className="max-sm:hidden">
              <ProfileButton />
            </div>
            <Link href="/chats" className="sm:hidden">
              <BsChatDots size={20} />
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
    </div>
  );
};

export default NavBar;
