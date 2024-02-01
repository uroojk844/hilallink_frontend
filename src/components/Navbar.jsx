import { GoHome } from "react-icons/go";
import { BsBell, BsChatDots, BsFilm, BsSearch } from "react-icons/bs";
import Link from "next/link";

const NavBar = () => {
  return (
    <section className="bg-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 h-12">
        <img src="/logo.png" alt="logo" className="w-8" />
        <div className="flex items-center justify-between max-w-md text-xl w-full">
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
          className="w-8 aspect-square rounded-full"
        />
      </nav>
    </section>
  );
};

export default NavBar;
