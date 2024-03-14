"use client";
import PostCard from "@/components/Home/PostCard";
import React, { useEffect, useState } from "react";
import {
  BsArrowLeft,
  BsBoxArrowUpRight,
  BsGeoAlt,
  BsImage,
  BsImageAlt,
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
import EditProfile from "@/components/EditProfile";
import { fetchUsers } from "@/redux/userSlice";

const Profile = () => {
  const [actions, setActions] = useState(false);
  const userData = useSelector((state) => state.userSlice.user);
  const edit = useSelector((state) => state.togglesSlice.editProfile);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers())
  })
  return (
    <>
      {edit && <EditProfile />}
      <div className="small bg-white dark:bg-[hsl(200,6%,10%)]">
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
            src={userData.cover_url || "/profile.avif"}
            className="h-[220px] w-full object-cover"
            alt=""
          />
        </div>
        <div className="grid grid-cols-3 pt-3">
          <div className="text-center">
            <div className="font-bold">{userData?.followers?.length}</div>
            <div className="text-sm text-gray-500 dark:text-[#afa99e]">
              Followers
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold">{userData?.following?.length}</div>
            <div className="text-sm text-gray-500 dark:text-[#afa99e]">
              Following
            </div>
          </div>
          <div className="text-center">
            <div className="font-bold">0</div>
            <div className="text-sm text-gray-500 dark:text-[#afa99e]">
              Posts
            </div>
          </div>
        </div>
        <div className="max-sm:px-3 px-8 py-4 flex  justify-between items-center mt-2">
          <section className="flex gap-3 items-center">
            <img
              src={userData?.profile_url || "/avtar.jpg"}
              className="h-12 w-12 rounded-full"
              alt=""
            />
            <div>
              <div className="font-bold">{userData?.name}</div>
              <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                @{userData?.username}
              </div>
            </div>
          </section>
          <button
            onClick={() => dispatch(showEdit())}
            className="bg-black dark:bg-[hsl(180,40%,5%)] flex items-center gap-2 text-white text-sm py-2 px-4 rounded-full max-sm:text-xs"
          >
            <BsPen />
            Edit
          </button>
        </div>

        {userData?.bio && (
          <div className="max-sm:px-3 max-sm:text-xs px-8 text-sm pb-4">{userData?.bio}</div>
        )}

        <div className="max-sm:px-3 px-8 flex justify-between text-xs pb-5 text-gray-500 dark:text-[#afa99e]">
          {userData?.category && (
            <div className="flex items-center gap-2 justify-center">
              {" "}
              <IoGrid /> {userData.category}
            </div>
          )}
          {userData?.location && (
            <div className="flex items-center gap-2 justify-center">
              {" "}
              <BsGeoAlt /> {userData?.location}
            </div>
          )}
          {userData?.website && (
            <a
              href={userData?.website}
              className="flex items-center gap-2 justify-center"
            >
              {" "}
              <BsBoxArrowUpRight /> {userData?.website}
            </a>
          )}
        </div>
        <div className="flex border-t text-sm border-b">
          <div className="py-3 px-4 font-medium">All Posts</div>
          <div className="py-3 px-4 text-gray-500 dark:text-[#afa99e]">
            Media
          </div>
          <div className="py-3 px-4 text-gray-500 dark:text-[#afa99e]">
            Replies
          </div>
          <div className="py-3 px-4 text-gray-500 dark:text-[#afa99e]">
            Activities
          </div>
        </div>
        {/* <div className="grid place-items-center text-gray-600 py-16">
        <BsImage size={65} />
        <div className="text-lg mt-4">
          No Posts Found
        </div>
      </div> */}
        {"abcde".split("").map((item, index) => {
          return <PostCard key={index} index={index} />;
        })}
      </div>
    </>
  );
};

export default Profile;
