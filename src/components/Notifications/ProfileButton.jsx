import React, { useEffect, useRef, useState } from "react";
import ProfileMenu from "../Navbar/ProfileMenu";

const ProfileButton = ({ setSwitchAc }) => {
  const menuRef = useRef();
  const imageRef = useRef();
  const [menu, setMenu] = useState(false);

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
    <div className="relative">
      <img
        ref={imageRef}
        src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png"
        alt="logo"
        className="w-8 aspect-square rounded-full cursor-pointer"
        onClick={() => setMenu(!menu)}
      />
      {menu && (
        <ProfileMenu
          handleMenu={setMenu}
          switchAc={setSwitchAc}
          menuRef={menuRef}
        />
      )}
    </div>
  );
};

export default ProfileButton;
