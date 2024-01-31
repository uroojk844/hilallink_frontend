import { GoHome } from "react-icons/go";
import { BsBell, BsChat, BsChatDots, BsFilm, BsSearch } from "react-icons/bs";

const NavBar = () => {
  return (
    <section className="bg-white">
      <nav className="container mx-auto flex items-center justify-between px-4 h-12">
        <img src="/logo.png" alt="logo" className="w-8" />
        <div className="flex items-center justify-between max-w-md text-xl w-full">
          <GoHome size={24} />
          <BsFilm />
          <BsChatDots />
          <BsBell />
          <BsSearch />
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
