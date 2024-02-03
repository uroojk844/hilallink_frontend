import { GoHome } from "react-icons/go";
import { BsBell, BsChatDots, BsFilm, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useRef, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import SwicthProfile from "./SwicthProfile";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [switchAccount, setSwitchAccount] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }
  return (
    <>
      <section className="bg-white sticky top-0 z-40">
        <nav className="relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between max-w-md text-xl w-full">
            <Link href="/">
              <GoHome size={24} />
            </Link>
            <Link href="/shorts">
              <BsFilm />
            </Link>
            <Link href="/chats">
              <BsChatDots />
            </Link>
            <Link href="/notifications">
              <BsBell />
            </Link>
            <Link href="/search">
              <BsSearch />
            </Link>
          </div>
          <img
            src="http://picsum.photos/32.webp"
            alt="logo"
            className="w-8 aspect-square rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
        </nav>
      </section>
      <ProfileMenu menu={menu} switchAc={setSwitchAccount} />
      {
        switchAccount && <SwicthProfile switchAc={setSwitchAccount} />
      }
    </>
  );
};

export default NavBar;
