"use client";
import ChatCard from "@/components/chats/ChatCard";
import UserData from "@/store/chatStore";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const Chats = () => {
  const profile = UserData();

  return (
    <section className="overflow-hidden bg-white min-h-screen sm:rounded-md small">
      {profile["profile"]?.friends.map((friend) => {
        return <ChatCard user={friend} key={friend.id} />;
      })}
    </section>
  );
};

export default Chats;
