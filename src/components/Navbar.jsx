import { GoHome } from "react-icons/go";
import { BsBell, BsChatDots, BsFilm, BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useRef, useState } from "react";
import SwicthProfile from "./Navbar/SwicthProfile";
import ProfileButton from "./Notifications/ProfileButton";

const NavBar = () => {
  const [switchAccount, setSwitchAccount] = useState(false);

  return (
    <>
      <section className="bg-white sticky top-0 z-40">
        <nav className="relative mx-auto flex items-center justify-between px-4 h-12">
          <div className="font-bold">HilalLink</div>
          <div className="absolute z-40 left-1/2 -translate-x-1/2 flex items-center justify-between max-w-md text-xl w-full">
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
          <ProfileButton setSwitchAc={setSwitchAccount} />
        </nav>
      </section>
      {switchAccount && <SwicthProfile switchAc={setSwitchAccount} />}
    </>
  );
};

export default NavBar;
