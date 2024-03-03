"use client";
import ChatCard from "@/components/chats/ChatCard";
import UserData from "@/store/chatStore";

const Chats = () => {
  const profile = UserData();

  return (
    <section className="overflow-hidden bg-white dark:bg-black min-h-screen sm:rounded-md small">
      {profile["profile"]?.friends.map((friend) => {
        return <ChatCard user={friend} key={friend.id} />;
      })}
    </section>
  );
};

export default Chats;
