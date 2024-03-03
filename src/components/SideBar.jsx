import {
  FaExclamationTriangle,
  FaFile,
  FaFileAlt,
  FaHeadset,
  FaPlus,
  FaPowerOff,
  FaUserCog,
  FaUserShield,
} from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { VscColorMode } from "react-icons/vsc";
import UserCard from "./UserCard";
import Link from "next/link";
import { MdFeedback } from "react-icons/md";

const SideBar = () => {
  const sideBarMenu = [
    { icon: <FaUserCog size={20} />, name: "Profile settings", path: "/" },
    { icon: <FaUserShield size={20} />, name: "Privacy settings", path: "/" },
    { icon: <VscColorMode size={20} />, name: "Appearance", path: "/" },
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

  return (
    <section className="bg-white w-80 absolute right-0 top-14 p-4 sm:rounded-md border border-gray-200">
      <UserCard />
      <section className="pb-4 pt-3 my-4 border-y border-gray-200">
        <div className="peer leading-4 flex items-center justify-between text-[16px] font-[600]">
          Switch Account
          <label className="cursor-pointer">
            <FaRotate />
            <input type="checkbox" className="cb hidden" />
          </label>
        </div>
        <div className="peer-has-[.cb:checked]:h-12 peer-has-[.cb:checked]:mt-3 transition-all duration-300 h-0 flex gap-2 overflow-x-auto scrollbar-h">
          {"djl".split("").map((data,index) => (
            <img
              key={index}
              src={`http://picsum.photos/40.webp?${index}`}
              className="rounded-full size-12 cursor-pointer"
            />
          ))}

          <div className="flex-shrink-0 cursor-pointer bg-gray-400 size-12 rounded-full grid place-items-center text-white">
            <FaPlus />
          </div>
        </div>
      </section>
      <div className="grid gap-4">
        {sideBarMenu.map((sideBarMenuItem,key) => (
          <Link key={key} href={sideBarMenuItem.path} className="flex items-center gap-4">

            {sideBarMenuItem.icon} {sideBarMenuItem.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
