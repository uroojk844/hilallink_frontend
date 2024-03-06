"use client";
import CommentCard from "@/components/Details/CommentCard";
import { useState } from "react";
import {
  BsChat,
  BsEmojiSmile,
  BsHeart,
  BsImage,
  BsRepeat,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { GoShare } from "react-icons/go";
import "animate.css";

const Details = () => {
  const [options, setOptions] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const [reply, setReply] = useState("");
  return (
    <div className="small bg-white px-4">
      <section className="py-4 border-b relative border-gray-300 dark:border-[hsl(197,6%,25%)] grid grid-cols-[max-content,auto]">
        <div>
          <img src="/avtar.jpg" className="h-8 w-8 rounded-full" alt="" />
        </div>
        <div className="px-3">
          <section className="flex justify-between">
            <div>
              <div className="font-medium">Mohd Belal Naim</div>
              <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                @belalnaim9
              </div>
            </div>
            <div className="flex gap-2">
              <span className="text-xs text-gray-500 dark:text-[#afa99e]">
                42 mins ago
              </span>
              <BsThreeDotsVertical className="cursor-pointer" />
            </div>
          </section>
          <div className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            suscipit quod eum, sint
          </div>
          <img
            src="https://picsum.photos/400"
            className="border border-gray-400 mt-3 rounded-md w-full"
            alt=""
          />
          <div className="flex gap-5 mt-4 items-center">
            <div className="flex items-center gap-2">
              <BsHeart
                size={22}
                className="text-gray-500 dark:text-[#afa99e]"
              />{" "}
              <span className="text-sm text-gray-500 dark:text-[#afa99e]">
                129
              </span>{" "}
            </div>
            <div className="flex items-center gap-2">
              <BsChat size={22} className="text-gray-500 dark:text-[#afa99e]" />{" "}
              <span className="text-sm text-gray-500 dark:text-[#afa99e]">
                32
              </span>{" "}
            </div>
            <BsRepeat size={20} className="text-gray-500 dark:text-[#afa99e]" />
            <GoShare
              onClick={() => window.Navigator.share("https://localhost:5000")}
              size={24}
              className="text-gray-500 dark:text-[#afa99e] absolute right-2"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <input
              onFocus={() => setOptions(true)}
              type="text"
              className="bg-transparent outline-none"
              placeholder="Reply to this post "
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <button
              disabled
              className="bg-black disabled:bg-gray-400 text-white font-medium text-sm py-2 px-4 rounded-full"
            >
              Send
            </button>
          </div>
          {options && (
            <div className="flex gap-3 relative text-gray-500 dark:text-[#afa99e] mt-2 animate__animated animate__fadeInDown">
              <BsImage size={22} />
              {/* <BsEmojiSmile size={22} onClick={() => setEmoji(!emoji)} /> */}
              {/* <EmojiPicker
                open={emoji}
                style={{ position: "absolute" }}
                className="top-7"
              /> */}
            </div>
          )}
        </div>
      </section>
      <section>
        {"abcdef".split("").map((item, index) => {
          return <CommentCard key={index} />;
        })}
      </section>
    </div>
  );
};

export default Details;
