import React from "react";
import { BsPlus, BsX } from "react-icons/bs";
import "animate.css";
import { useDispatch } from "react-redux";
import { hideSwitch } from "@/redux/togglesSlice";

const SwicthProfile = () => {
  const dispatch = useDispatch();
  return (
    <div className="glass fixed inset-0 grid place-items-center z-50">
      <div className="animate__animated animate__bounceIn bg-white w-[min(400px,95%)] rounded-md shadow-lg overflow-hidden">
        <div className="font-bold text-lg p-4 border-b flex items-center gap-3">
          <BsX className="cursor-pointer text-2xl" onClick={()=>dispatch(hideSwitch())}/> Switch account
        </div>
        <section className="py-3">
          <div className="flex items-center gap-3 hover:bg-gray-100 pointer-cursor cursor-pointer p-3">
            <img
              src="https://picsum.photos/400"
              className="h-12 w-12 object-contain rounded-full"
              alt=""
            />
            <div>
              <div className="font-medium">Sajad Khaki</div>
              <div className="text-sm text-gray-500">sajadkhaki91</div>
            </div>
          </div>
          <div className="flex items-center gap-3 hover:bg-gray-100 pointer-cursor cursor-pointer p-3">
            <img
              src="https://picsum.photos/400?2"
              className="h-12 w-12 object-contain rounded-full"
              alt=""
            />
            <div>
              <div className="font-medium">Mohd Belal Naim</div>
              <div className="text-sm text-gray-500">belalnaim9</div>
            </div>
          </div>
          <div className="flex items-center gap-3 hover:bg-gray-100 pointer-cursor cursor-pointer p-3">
            <img
              src="https://picsum.photos/400?3"
              className="h-12 w-12 object-contain rounded-full"
              alt=""
            />
            <div>
              <div className="font-medium">Urooj Khan</div>
              <div className="text-sm text-gray-500">uroojk844</div>
            </div>
          </div>
        </section>
        <div className="hover:bg-gray-100 cursor-pointer text-center py-4 border-t text-sm flex items-center gap-2 justify-center">
          <BsPlus className="text-lg" /> Add a new account
        </div>
      </div>
    </div>
  );
};

export default SwicthProfile;
