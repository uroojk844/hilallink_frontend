import { FaArrowLeft } from "react-icons/fa";

const NavBarBack = ({ children }) => {
  return (
    <nav className="max-sm:border-b mb-2 bg-white sm:rounded-md flex gap-3 items-center p-2.5">
      <FaArrowLeft onClick={() => history.back()} />{" "}
      <div className="text-lg font-[600]">{children}</div>
    </nav>
  );
};

export default NavBarBack;
