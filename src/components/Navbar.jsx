import { GoHome } from "react-icons/go";
import {
  BsBell,
  BsChatDots,
  BsCompass,
  BsFilm,
  BsSearch,
} from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import ProfileButton from "./Navbar/ProfileButton";
import NotificationsButton from "./Navbar/NotificationsButton";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const EditProfile = dynamic(()=>import('./Navbar/EditProfile'))
const SwicthProfile = dynamic(()=>import('./Navbar/SwicthProfile'))

const NavBar = () => {
  const editProfile = useSelector(state => state.togglesSlice.editProfile)
  const switchAccount = useSelector(state => state.togglesSlice.switchProfile)
  

  return (
    <>
      <section className="bg-white sticky top-0 z-40 max-sm:border-b">
        <nav className="relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between max-w-md text-xl w-full navbar">
            <Link href="/">
              <GoHome size={24} />
            </Link>
            <Link href="/shorts">
              <BsFilm />
            </Link>
            <Link href="/chats">
              <BsChatDots />
            </Link>
            <Link href="/search">
              <BsCompass />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/search">
              <BsSearch className="text-xl" />
            </Link>
            <NotificationsButton />{" "}
            <ProfileButton />
          </div>
        </nav>
      </section>

      {switchAccount && <SwicthProfile/>}
      {editProfile && <EditProfile/>}
    </>
  );
};

export default NavBar;
