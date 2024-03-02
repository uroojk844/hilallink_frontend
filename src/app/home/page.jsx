"use client";
import PostCard from "../../components/Home/PostCard";
import { useState } from "react";
import CreatePost from "@/components/CreatePost";
import NavBar from "@/components/Navbar";

const HomePage = () => {
  const [create, setCreate] = useState(false);
  return (
    <>
      <NavBar />

      {create && <CreatePost hidePost={hideCreate} />}

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
