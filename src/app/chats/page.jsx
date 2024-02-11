"use client";
import ChatCard from "@/components/chats/ChatCard";
import UserData from "@/store/chatStore";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const Chats = () => {
  const profile = UserData();

  return (
    <section className="bg-white min-h-screen sm:rounded-md small">
      <Link
        href="/"
        className="text-lg font-bold p-3 flex items-center gap-3 border-b"
      >
        <BsArrowLeft className="cursor-pointer" /> Messages
      </Link>
      <section>
        {profile["profile"]?.friends.map((friend) => {
          return <ChatCard user={friend} key={friend.id} />;
        })}
      </section>
    </section>
  );
};

export default Chats;
