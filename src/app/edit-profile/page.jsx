import React from "react";
import { BsArrowLeft, BsCamera, BsX, BsXCircle } from "react-icons/bs";

const page = () => {
  return (
    <div className="medium">
      <div className="overflow-hidden bg-white rounded-md">
        <div className="p-3 text-lg font-bold flex items-center gap-3">
          <BsArrowLeft className="text-xl" /> Edit Profile
        </div>
        <div className="relative">
          <div className="absolute h-full w-full grid place-items-center">
            <div className="flex gap-6">
              <BsXCircle className="text-3xl text-white" />
              <BsCamera className="text-3xl text-white" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default page;
