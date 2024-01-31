import React from "react";
import { BsPersonAdd, BsSend, BsStop, BsThreeDotsVertical } from "react-icons/bs";
import { BsHandThumbsUp } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { BsRepeat } from "react-icons/bs";
import { BiBlock } from "react-icons/bi";

const PostCard = ({index}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden mt-2">
      <section className="relative">
        <div className="flex justify-between items-center px-2 py-2">
          <div className="flex items-center gap-3">
            <img
              src={`https://picsum.photos/400?${index}`}
              className="h-8 w-8 object-contain rounded-full"
              alt=""
            />{" "}
            <div>
              <div className="font-medium text-xs">
                Dr. Alama hussain Madani
              </div>
              <div className="text-gray-500 text-[10px]">42 mins ago</div>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical className="text-md" />
          </div>
        </div>
      
      </section>
      <section>
        <img
          src={`https://picsum.photos/400?${index+1}`}
          className="h-64 w-full object-cover"
          alt=""
        />
      </section>
      <section className="flex bg-white justify-between items-center p-3 border-b">
        <div className="flex gap-6">
          <div className="flex gap-1 items-center">
            <BsHandThumbsUp className="text-xl" />
            <div className="font-light text-xs">122</div>
          </div>
          <div className="flex gap-1 items-center">
            <GoComment className="text-xl" />
            <div className="font-light text-xs">32</div>
          </div>
          <div className="flex gap-1 items-center">
            <BsRepeat className="text-xl" />
            <div className="font-light text-xs">12</div>
          </div>
        </div>
        <div>
          <BsSend className="text-lg" />
        </div>
      </section>
      <section className="p-3 text-gray-500 text-xs">
        <span className="font-bold">@AlamaMadni</span> lorem ipsum dolor ist amet this dolor amet ispum... <span className="font-medium">more</span>
      </section>
    </div>
  );
};

export default PostCard;
