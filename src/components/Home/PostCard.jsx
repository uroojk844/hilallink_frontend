"use client";

import React, { useState } from "react";
import { BsChat, BsExclamationCircle, BsHeart, BsSave, BsShare, BsThreeDotsVertical, BsX, BsXCircle } from "react-icons/bs";
import { GoShare } from "react-icons/go";
import Link from "next/link";
import { RiRepeat2Fill } from "react-icons/ri";

const PostCard = ({ index }) => {
  const [actions, setActions] = useState(false);
  return (
    <div className="p-4 bg-white dark:bg-[hsl(200,6%,10%)] border-b relative border-gray-300 dark:border-[hsl(197,6%,25%)] grid grid-cols-[max-content,auto]">
      {actions && (
        <div className="p-2 absolute bg-white rounded-md right-0 top-10 shadow text-sm dark:bg-[hsl(200,6%,10%)]">
          <div className="px-2 py-1 pr-14 flex items-center gap-3"><BsShare/> Share</div>
          <div className="px-2 py-1 pr-14 flex items-center gap-3"><BsSave/> Save</div>
          <div className="px-2 py-1 pr-14 flex items-center gap-3"><BsExclamationCircle/> Report</div>
          <div className="px-2 py-1 pr-14 flex items-center gap-3"><BsXCircle/> Block</div>
        </div>
      )}
      <div>
        <img src="/avtar.jpg" className="h-8 w-8 rounded-full" alt="" />
      </div>
      <div className="px-3">
        <section className="flex justify-between">
          <div>
            <div className="font-medium max-sm:text-sm">Mohd Belal Naim</div>
            <div className="text-xs text-gray-500 dark:text-[#afa99e]">
              @belalnaim9
            </div>
          </div>
          <div className="flex gap-2">
            <span className="max-sm:text-[10px] text-xs text-gray-500 dark:text-[#afa99e]">
              42 mins ago
            </span>
            <BsThreeDotsVertical
              className="cursor-pointer"
              onClick={() => setActions(!actions)}
            />
          </div>
        </section>
        <div className="text-sm mt-2 max-sm:text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          suscipit quod eum, sint
        </div>
        <Link href="/details">
          <img
            src={`https://picsum.photos/400${index}`}
            className="mt-3 rounded-md"
            alt=""
          />
        </Link>
        <div className="flex mt-4 items-center justify-between">
          <section className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <BsHeart
                size={16}
                className="text-gray-500 dark:text-[#afa99e]"
              />{" "}
              <span className="text-xs text-gray-500 dark:text-[#afa99e]">
                129
              </span>{" "}
            </div>
            <div className="flex items-center gap-2">
              <BsChat size={16} className="text-gray-500 dark:text-[#afa99e]" />{" "}
              <span className="text-xs text-gray-500 dark:text-[#afa99e]">
                32
              </span>{" "}
            </div>
            <div className="flex items-center gap-2">
              <RiRepeat2Fill
                size={16}
                className="text-gray-500 dark:text-[#afa99e]"
              />{" "}
              <span className="text-xs text-gray-500 dark:text-[#afa99e]">
                129
              </span>{" "}
            </div>
          </section>
          <GoShare size={18} className="text-gray-500 dark:text-[#afa99e]" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
