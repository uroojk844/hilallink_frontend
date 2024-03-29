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
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme } from "@/redux/togglesSlice";

const SideBar = () => {
  const sideBarMenu = [
    { icon: <FaUserCog size={20} />, name: "Profile settings", path: "/" },
    { icon: <FaUserShield size={20} />, name: "Privacy settings", path: "/" },
    {
      icon: <VscColorMode size={20} />,
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
    { icon: <FaPowerOff size={20} />, name: "Logout", path: "/logout" },
  ];

  const darkTheme = useSelector((state) => state.togglesSlice.darkTheme);
  const dispatch = useDispatch();

  const toggleTheme = useCallback(() => {
    if (!localStorage.getItem("dark-theme")) {
      localStorage.setItem("dark-theme", true);
    } else {
      localStorage.removeItem("dark-theme");
    }
    dispatch(toggleDarkTheme());
    document.body.classList.toggle("dark");
  }, []);
  const [user, setUser] = useState({});

  return (
    <section className="bg-white dark:bg-[hsl(200,6%,10%)] w-80 absolute right-0 max-sm:translate-x-1/2 max-sm:right-1/2 top-14 p-4 rounded-[32px] border border-gray-200  dark:border-[#363b3d]">
      <div className="border p-2 rounded-full">
        <UserCard data={user.user} />
      </div>
      <section className="pb-4 pt-3.5 my-4 border-y border-gray-200 dark:border-[#363b3d]">
        <label className="group peer  cursor-pointer leading-4 flex items-center justify-between text-[16px]">
          <div className="group-has-[.cb:checked]:before:content-['Hide'] before:content-['Show']">
            {" "}
            existing account
          </div>
          <FaChevronCircleDown className="group-has-[.cb:checked]:rotate-180 duration-300" />
          <input type="checkbox" className="cb hidden" />
        </label>

        <div className="peer-has-[.cb:checked]:h-auto peer-has-[.cb:checked]:mt-3 transition-all duration-300 h-0 grid gap-2 overflow-y-auto max-h-52 scrollbar-v">
          {"dl".split("").map((index) => (
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
        {sideBarMenu.map((sideBarMenuItem, index) =>
          sideBarMenuItem.name != "Dark theme" ? (
            <Link
              key={index}
              href={sideBarMenuItem.path}
              className="flex items-center gap-4"
            >
              {sideBarMenuItem.icon} {sideBarMenuItem.name}
            </Link>
          ) : (
            <div
              key={index}
              onClick={toggleTheme}
              className="flex items-center gap-4 cursor-pointer"
            >
              {sideBarMenuItem.icon} {sideBarMenuItem.name}
              <div className="ml-auto">
                {darkTheme ? (
                  <FaToggleOn size={24} />
                ) : (
                  <FaToggleOff size={24} />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SideBar;
