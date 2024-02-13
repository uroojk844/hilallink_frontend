"use client";
import Avatar from "@/components/Avatar";
import UserData from "@/store/chatStore";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaEllipsisV, FaPaperPlane } from "react-icons/fa";
import { MdBlock, MdReportGmailerrorred } from "react-icons/md";

const Chat = () => {
  const { id } = useParams();
  const userData = UserData();
  const user = userData.profile?.friends.filter((user) => user.id == id)[0];
  const chats = userData.friends?.filter((user) => user.id == id)[0].chatlog;
  const chatContainer = useRef();

  const [options, setOptions] = useState(false);

  useEffect(() => {
    chatContainer.current.scrollTo(0, chatContainer.current.scrollHeight);
  }, [chatContainer.current?.scrollHeight]);

  return (
    <section className="chat-grid max-w-lg mx-auto bg-white">
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex gap-3 items-center">
          <Link href="/chats">
            <BsArrowLeft size={20} />
          </Link>
          <Avatar src={user?.picture} />
          <div className="text-lg font-[600]">{user?.name}</div>
        </div>
        <div className="relative">
          {options && (
            <div className="absolute -left-2 -translate-x-full bg-white rounded shadow">
              <div onClick={() => setOptions(false)} className="flex gap-2 items-center px-4 py-2 w-32 cursor-pointer hover:bg-gray-200 transition-colors">
                <MdBlock /> Block
              </div>
              <div onClick={() => setOptions(false)} className="flex gap-2 items-center px-4 py-2 w-32 cursor-pointer hover:bg-gray-200 transition-colors">
                <MdReportGmailerrorred /> Report
              </div>
            </div>
          )}
          <button onClick={() => setOptions((cur) => !cur)}>
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <div
        ref={chatContainer}
        id="chatContainer"
        className="scrollbar-primary overflow-y-auto p-3 grid gap-3 content-start"
      >
        {chats?.map((chat) => {
          return (
            <div
              key={chat.message_id}
              className={`text-sm grid py-1 px-3 rounded-xl max-w-[16rem] ${
                chat.side == "right"
                  ? "bg-primary place-self-end"
                  : "place-self-start bg-gray-200"
              }`}
            >
              {chat.text}
              <span className="text-[10px] place-self-end">
                {chat.timestamp}
              </span>
            </div>
          );
        })}
        {"dasdfshf".split("").map((elem, index) => {
          return (
            <div
              key={index}
              className={`text-sm grid py-2 px-3 rounded-2xl max-w-[16rem] ${
                "right" == "right"
                  ? "bg-primary place-self-end"
                  : "place-self-start bg-gray-200"
              }`}
            >
              Yes, I have recieved the package.
              <span className="text-[10px] place-self-end">12:33 PM</span>
            </div>
          );
        })}
      </div>
      <form className="flex items-center gap-3 p-3 border-t">
        <input
          type="text"
          className="border py-2 px-4 rounded-full flex-1 outline-none"
          placeholder="Messege"
        />
        <button className="w-10 aspect-square bg-primary rounded-full grid place-items-center">
          <FaPaperPlane size="15px" />
        </button>
      </form>
    </section>
  );
};

export default Chat;
