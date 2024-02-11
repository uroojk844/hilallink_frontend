"use client";
import React from "react";
import { BsArrowLeft, BsCamera, BsShieldCheck } from "react-icons/bs";

const page = () => {
  return (
    <div className="small">
      <div className="overflow-hidden bg-white rounded-md ">
        <div className="p-3 text-lg font-bold flex items-center gap-3">
          <BsArrowLeft className="text-xl" /> Edit Profile
        </div>
        <div className="relative">
          <BsCamera className="absolute cursor-pointer z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          <img
            src="https://picsum.photos/800"
            className="w-full h-[140px] object-cover brightness-50 "
            alt=""
          />
        </div>
        <div className="grid gap-y-3 p-3 pt-4 relative">
          <div className="absolute -top-20 left-4">
            <div className="relative">
              <div className="absolute grid place-items-center h-full w-full rounded-full">
                <BsCamera className="text-white z-40 text-2xl cursor-pointer" />
              </div>
              <img
                src="https://picsum.photos/400"
                className="brightness-50 h-28 w-28 rounded-full border-4 border-white"
                alt=""
              />
            </div>
          </div>
          <input
            type="text"
            className="w-full border p-2 mt-7 rounded-md"
            placeholder="Full name"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            className="border rounded p-2 resize-none"
            placeholder="Bio"
          ></textarea>
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Category"
          />
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Location"
          />
          <input
            type="text"
            className="w-full border p-2 rounded-md"
            placeholder="Website"
          />
          <button className="w-max border-2 border-black px-4 py-1 text-sm rounded-full flex items-center gap-1">
            <BsShieldCheck /> Privacy settings
          </button>
        </div>
        <div className="border-t p-2 flex justify-end">
          <button className="bg-black rounded-full text-white py-1 px-4">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
