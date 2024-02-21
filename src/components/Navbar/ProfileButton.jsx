import React, { useEffect, useRef, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { dispatch } from "@/redux/store";
import { showAuth } from "@/redux/togglesSlice";
import { useSelector } from "react-redux";

const ProfileButton = () => {
  const menuRef = useRef();
  const imageRef = useRef();
  const [menu, setMenu] = useState(false);
  if (typeof window !== "undefined") {
    var user = localStorage.getItem("user");
  }
  const data = useSelector(state => state.userSlice.user)
  const status = useSelector(state=> state.userSlice.loading)
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        imageRef.current &&
        !imageRef.current.contains(e.target)
      ) {
        setMenu(false);
      }
    });
    return () => {
      document.removeEventListener("click", (e) => {});
    };
  }, []);
  return (
    <div className="sm:relative z-40">
      <img
        ref={imageRef}
        src={data?.profilePhoto || "/avtar.jpg"}
        alt="logo"
        className="w-8 aspect-square rounded-full cursor-pointer"
        onClick={() => (user ? setMenu(!menu) : dispatch(showAuth()))}
      />
      {menu && <ProfileMenu handleMenu={setMenu} menuRef={menuRef} />}
    </div>
  );
};

export default ProfileButton;
