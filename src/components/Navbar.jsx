import { GoHome } from "react-icons/go";
import {
  BsBell,
  BsChatDots,
  BsCompass,
  BsFilm,
  BsSearch,
} from "react-icons/bs";
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
            <Link href="/notifications">
              <BsBell className="text-xl" />
            </Link>
            <Link href="/search">
              <BsSearch className="text-xl" />
            </Link>

            <ProfileButton setSwitchAc={setSwitchAccount} />
          </div>
        </nav>
      </section>
      {switchAccount && <SwicthProfile switchAc={setSwitchAccount} />}
    </>
  );
};

export default NavBar;
