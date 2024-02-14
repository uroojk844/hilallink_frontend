"use client";
import { GoHome } from "react-icons/go";
import {
  BsBell,
  BsChatDots,
  BsCompass,
  BsFilm,
  BsPlusCircle,
  BsPlusCircleFill,
  BsSearch,
} from "react-icons/bs";
import Link from "next/link";
const ProfileButton = dynamic(() => import("./Navbar/ProfileButton"));
import NotificationsButton from "./Navbar/NotificationsButton";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
const EditProfile = dynamic(() => import("./Navbar/EditProfile"));
const SwicthProfile = dynamic(() => import("./Navbar/SwicthProfile"));

const NavBar = () => {
  const editProfile = useSelector((state) => state.togglesSlice.editProfile);
  const switchAccount = useSelector(
    (state) => state.togglesSlice.switchProfile
  );

  return (
    <>
      <section className="sticky top-0 bg-white z-40 max-sm:border-b">
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
              <ProfileButton />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-56 pt-2.5">
              <ReactSearchAutocomplete
                formatResult={() => {}}
                placeholder="Search"
                items={[]}
                className="max-sm:hidden search z-30"
                onSelect={() => {}}
              />
            </div>
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
    </>
  );
};

export default NavBar;
