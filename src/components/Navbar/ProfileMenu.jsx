import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  BsBookmarkCheckFill,
  BsGearFill,
  BsPower,
  BsQuestionCircleFill,
  BsShieldFillCheck,
} from "react-icons/bs";


const ProfileMenu = ({ handleMenu, switchAc, menuRef }) => {
  const router = useRouter();
  function handleClick(path) {
    handleMenu(false);
    router.push(path);
  }


  return (
    <>
      <section
        ref={menuRef}
        className="fixed top-14 rounded-md right-2 p-2 bg-white w-[min(320px,calc(100%-16px))]"
      >
        <section className="shadow-md p-3">
          <div className="rounded-sm">
            <div className="flex items-center gap-2">
              <img
                src="https://freepngimg.com/thumb/google/66726-customer-account-google-service-button-search-logo.png"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="text-sm">Mohd Belal Naim</div>
                <div className="text-xs text-gray-500">@belalnaim9</div>
              </div>
            </div>
          </div>
          <div
            onClick={() => switchAc(true)}
            className="cursor-pointer text-center text-sm bg-gray-200 py-2 rounded-md mt-3"
          >
            Switch account
          </div>
        </section>
        <section className="shadow-md rounded-sm mt-2">
          <div onClick={()=>handleEdit()} className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
            <BsShieldFillCheck className="text-lg" />{" "}
            <span className="text-sm">Profile settings</span>
          </div>
          <div className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
            <BsGearFill className="text-lg" />{" "}
            <span className="text-sm">Privacy settings</span>
          </div>
          <div className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
            <BsQuestionCircleFill className="text-lg" />{" "}
            <span className="text-sm">Help center</span>
          </div>

          <div
            onClick={() => handleClick("/saved")}
            className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer"
          >
            <BsBookmarkCheckFill className="text-lg" />{" "}
            <span className="text-sm">Saved Posts</span>
          </div>

          <div className="flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer">
            <BsPower className="text-lg" />{" "}
            <span className="text-sm">Logout</span>
          </div>
        </section>
      </section>

    </>
  );
};

export default ProfileMenu;
