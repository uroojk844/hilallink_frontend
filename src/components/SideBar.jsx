import {
  FaChevronCircleDown,
  FaExclamationTriangle,
  FaFile,
  FaFileAlt,
  FaHeadset,
  FaPlus,
  FaPowerOff,
  FaToggleOff,
  FaToggleOn,
  FaUserCog,
  FaUserShield,
} from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import UserCard from "./UserCard";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";

const SideBar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const sideBarMenu = [
    { icon: <FaUserCog size={20} />, name: "Profile settings", path: "/" },
    { icon: <FaUserShield size={20} />, name: "Privacy settings", path: "/" },
    {
      icon: <VscColorMode />,
      name: "Dark theme",
      path: "/",
    },
    { icon: <FaHeadset size={20} />, name: "Support centre", path: "/" },
    { icon: <MdFeedback size={20} />, name: "Give feedback", path: "/" },
    {
      icon: <FaExclamationTriangle size={20} />,
      name: "Report an issue",
      path: "/",
    },
    { icon: <FaFileAlt size={20} />, name: "Resources", path: "/" },
    { icon: <FaPowerOff size={20} />, name: "Logout", path: "/" },
  ];

  const toggleTheme = useCallback(() => {
    if (!localStorage.getItem("dark-theme")) {
      localStorage.setItem("dark-theme", true);
    } else {
      localStorage.removeItem("dark-theme");
    }
    document.body.classList.toggle("dark");
    setDarkTheme((cur) => !cur);
  }, [setDarkTheme]);

  useEffect(() => {
    localStorage.getItem("dark-theme") && document.body.classList.add("dark");
    setDarkTheme(localStorage.getItem("dark-theme") ?? false);
  }, []);

  return (
    <section className="bg-white dark:bg-[hsl(0deg_0%_5%)] w-80 absolute right-0 top-14 p-4 sm:rounded-[32px] border border-gray-200">
      <div className="border p-2 rounded-full">
        <UserCard />
      </div>
      <section className="pb-4 pt-3.5 my-4 border-y border-gray-200">
        <div className="peer leading-4 flex items-center justify-between text-[16px]">
          Show existing Account
          <label className="cursor-pointer">
            <FaChevronCircleDown />
            <input type="checkbox" className="cb hidden" />
          </label>
        </div>

        <div className="peer-has-[.cb:checked]:h-auto peer-has-[.cb:checked]:mt-3 transition-all duration-300 h-0 grid gap-2 overflow-x-auto scrollbar-h">
          {"djl".split("").map((index) => (
            <div key={index} className="border p-2 rounded-full">
              <UserCard />
            </div>
          ))}

          <div className="flex gap-2 items-center border p-2 rounded-full">
            <div className=" flex-shrink-0 cursor-pointer bg-gray-400 size-10 rounded-full grid place-items-center text-white">
              <FaPlus />
            </div>
            <div className="font-[600] text-sm">Add an account</div>
          </div>
        </div>
      </section>
      <div className="grid gap-4">

        {sideBarMenu.map((sideBarMenuItem,index) => (
          <Link key={index} href={sideBarMenuItem.path} className="flex items-center gap-4">

            {sideBarMenuItem.icon} {sideBarMenuItem.name}
            {sideBarMenuItem.name == "Dark theme" && (
              <div onClick={toggleTheme} className="ml-auto">
                {darkTheme ? (
                  <FaToggleOn size={20} />
                ) : (
                  <FaToggleOff size={20} />
                )}
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
