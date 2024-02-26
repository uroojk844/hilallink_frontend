"use client";
import Image from "next/image";
import PostCard from "../../components/Home/PostCard";
import { useEffect, useState } from "react";
import CreatePost from "@/components/Home/CreatePost";
import NavBar from "@/components/Navbar";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [create, setCreate] = useState(false);
  const userData = useSelector(state=>state.userSlice.user)
  return (
    <>
      <NavBar />
      <div className="small">
        <section
          onClick={() => setCreate(true)}
          className="max-sm:hidden flex bg-white rounded-lg items-center gap-2 py-3 px-2"
        >
          <Image
            src={userData?.profile_url||"https://picsum.photos/400"}
            className="rounded-full"
            width={32}
            height={32}
            alt="user"
          />
          <div className="bg-gray-100 text-xs py-2.5 px-4 cursor-pointer text-gray-00 rounded-full w-full">
            Write here what you want to say
          </div>
        </section>
        <section>
          {"ab".split("").map((item, index) => {
            return <PostCard key={index} index={index} />;
          })}
        </section>
        {create && <CreatePost controller={setCreate} />}
      </div>
    </>
  );
};

export default HomePage;
