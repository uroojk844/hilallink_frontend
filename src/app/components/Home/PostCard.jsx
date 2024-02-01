"use client";

import React, { useEffect, useState } from "react";
import { BsChat, BsSend, BsThreeDotsVertical, BsX } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { BsRepeat } from "react-icons/bs";
import PostActions from "./PostActions";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CommentCard from "./CommentCard";

const PostCard = ({ index }) => {
  const [actions, setActions] = useState(false);
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch("https://dummyjson.com/comments?limit=10")
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  },[])
  return (
    <>
      <Drawer>
        <DrawerContent>
          <div className="max-w-md w-full mx-auto max-sm:px-2">
            <div className="font-bold py-2 mt-3 max-sm:text-sm">Dr. Alama hussain Madani</div>
            <div className="text-sm mb-2 max-sm:text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae odio aliquid quas itaque ipsam perferendis culpa ducimus
              animi? Pariatur repudiandae veritatis sint voluptate expedita
              rerum doloribus magnam vero ratione tempora.
            </div>
            <div className="font-bold text-sm mb-2 mt-3">Comments</div>
            <input
              type="text"
              className="w-full border p-2 mb-4 rounded-lg text-sm"
              placeholder="Add a comment"
            />

            <div className="h-[400px] max-sm:h-[260px] overflow-scroll">
              {
                comments.map((item, index) => {
                  return <CommentCard index={index} data={item} />
                })
              }

            </div>
          </div>
        </DrawerContent>
        <div className="bg-white rounded-md overflow-hidden mt-2 shadow-md">
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
                {actions ? (
                  <BsX
                    className="text-lg cursor-pointer"
                    onClick={() => setActions(!actions)}
                  />
                ) : (
                  <BsThreeDotsVertical
                    className="text-md cursor-pointer"
                    onClick={() => setActions(!actions)}
                  />
                )}
              </div>
            </div>
          </section>
          <section className="relative">
            {actions && <PostActions />}
            <img
              src={`https://picsum.photos/400/400?${index + 1}`}
              className="w-full aspect-square object-cover"
              alt=""
            />
          </section>
          <section className="flex bg-white justify-between items-center p-3 border-b">
            <div className="flex gap-6">
              <div className="flex gap-1 items-center">
                <GoHeart className="text-xl" />
                <div className="font-light text-xs">122</div>
              </div>
              <DrawerTrigger>
                <div className="flex gap-1 items-center">
                  <BsChat className="text-lg" />
                  <div className="font-light text-xs">32</div>
                </div>
              </DrawerTrigger>
              <div className="flex gap-1 items-center">
                <BsRepeat className="text-xl" />
                <div className="font-light text-xs">12</div>
              </div>
            </div>
            <div>
              <BsSend className="text-lg" />
            </div>
          </section>
          <section className="px-3 py-4 text-xs">
            <span className="font-[600]">@AlamaMadni</span> lorem ipsum dolor
            ist amet this dolor amet ispum...{" "}
            <span className="font-medium">more</span>
          </section>
        </div>
      </Drawer>
    </>
  );
};

export default PostCard;
