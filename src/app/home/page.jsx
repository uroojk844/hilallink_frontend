"use client";
import Image from "next/image";
import PostCard from "../../components/Home/PostCard";
import { useEffect, useState } from "react";
import CreatePost from "@/components/Home/CreatePost";
import NavBar from "@/components/Navbar";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [create, setCreate] = useState(false);
  const userData = useSelector((state) => state.userSlice.user);
  return (
    <>
      <NavBar />
      <div className="small">
        <section className="flex items-center gap-4 bg-white px-4 py-2">
          <img src="/avtar.jpg" className="h-8 w-8 rounded-full" alt="" />
          <div className="border-b w-full text-gray-500 border-gray-300 text-sm py-3">
            Bismillah! What&apos;s on you mind?
          </div>
        </section>
        <section>
          {"abcd".split("").map((item, index) => {
            return <PostCard key={index} index={index} />;
          })}
        </section>
        {create && <CreatePost controller={setCreate} />}
      </div>
    </>
  );
};

export default HomePage;
