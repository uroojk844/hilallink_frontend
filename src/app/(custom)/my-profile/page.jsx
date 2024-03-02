"use client";
import PostCard from "@/components/Home/PostCard";
import React, { useState } from "react";
import {
  BsArrowLeft,
  BsBoxArrowUpRight,
  BsGeoAlt,
  BsPen,
  BsPersonLock,
  BsShare,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { CiWarning } from "react-icons/ci";
import { MdBlock } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { showEdit } from "@/redux/togglesSlice";
const Profile = () => {
  const data = [
    {
      title: "Following",
      value: 348,
    },
    {
      title: "Followers",
      value: "348K",
    },
    {
      title: "Posts",
      value: 468,
    },
    {
      title: "Like",
      value: "348K",
    },
  ];
  const [actions, setActions] = useState(false);
  const userData = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();

  return (
    <div className="small bg-white">
      <div className="relative">
        <div className="absolute top-2 left-2 text-white bg-gray-100 bg-opacity-10 backdrop-brightness-50 p-1 rounded-full">
          <BsArrowLeft />
        </div>
        <div
          onClick={() => setActions(!actions)}
          className="cursor-pointer absolute top-2 right-2 text-white bg-gray-100 bg-opacity-10 backdrop-brightness-50 p-1 rounded-full"
        >
          <BsThreeDotsVertical />
        </div>

        {actions && (
          <div className="bg-white absolute rounded-sm overflow-hidden right-1 top-10">
            <div className="flex items-center gap-2 py-1 px-1 text-sm hover:bg-gray-200 cursor-pointer ">
              <BsShare /> Share profile
            </div>
            <div className="flex items-center gap-2 py-1 px-1 text-sm hover:bg-gray-200 cursor-pointer ">
              <CiWarning className="text-lg" /> Report
            </div>
            <div className="flex items-center gap-2 py-1 px-1 text-sm hover:bg-gray-200 cursor-pointer ">
              <MdBlock /> Block
            </div>
          </div>
        )}

        <img
          src="/profile.avif"
          className="h-[280px] w-full object-cover"
          alt=""
        />
      </div>
      <div className="grid grid-cols-4 pt-3">
        {data.map((data, index) => {
          return (
            <div className="text-center" key={index}>
              <div className="font-bold">{data.value}</div>
              <div className="text-sm text-gray-500">{data.title}</div>
            </div>
          );
        })}
      </div>
      <div className="px-8 py-4 flex  justify-between items-center mt-2">
        <section className="flex gap-3 items-center">
          <img
            src={userData?.profile_url || "/avtar.jpg"}
            className="h-12 w-12 rounded-full"
            alt=""
          />
          <div>
            <div className="font-bold">{userData?.name}</div>
            <div className="text-xs text-gray-500">@{userData?.username}</div>
          </div>
        </section>
        <button
          onClick={() => dispatch(showEdit())}
          className="bg-black flex items-center gap-2 text-white text-sm py-1 px-3 rounded-full"
        >
          <BsPen />
          Edit Profile
        </button>
      </div>

      <div className="px-8 text-sm pb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quasi
        deserunt earum ex ducimus doloremque itaque libero iure asperiores
        possimus quia voluptatum consequuntur dignissimos similique eos, eum nam
        esse. Dignissimos. doloremque itaque libero iure asperiores possimus
      </div>

      <div className="px-8 flex justify-between text-xs pb-5 text-gray-500">
        <div className="flex items-center gap-2 justify-center">
          {" "}
          <IoGrid /> Religious Institutuon
        </div>
        <div className="flex items-center gap-2 justify-center">
          {" "}
          <BsGeoAlt /> Lucknow, India
        </div>
        <div className="flex items-center gap-2 justify-center">
          {" "}
          <BsBoxArrowUpRight /> Visit Website
        </div>
      </div>
      <div className="flex border-t text-sm border-b">
        <div className="py-3 px-4 font-medium">All Posts</div>
        <div className="py-3 px-4 text-gray-500">Media</div>
        <div className="py-3 px-4 text-gray-500">Replies</div>
        <div className="py-3 px-4 text-gray-500">Activities</div>
      </div>
      <div className="grid place-items-center text-gray-600 py-16">
        <BsPersonLock size={65}/>
        <div className="text-lg mt-4">{userData?.name}'s profile is locked</div>
      </div>
      {"abcde".split("").map((item, index) => {
        return <PostCard key={index} index={index} />;
      })}
    </div>
  );
};

export default Profile;
