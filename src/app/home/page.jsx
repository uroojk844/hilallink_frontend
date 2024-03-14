"use client";
import PostCard from "../../components/Home/PostCard";
import CreatePost from "@/components/CreatePost";
import NavBar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { showCreate } from "@/redux/togglesSlice";
import "animate.css";
import { useEffect, useState } from "react";
import AddMail from "@/components/AddMail";
import { fetchUsers } from "@/redux/userSlice";

const HomePage = () => {
  const create = useSelector((state) => state.togglesSlice.createPost);
  const userData = useSelector((state) => state.userSlice.user)
  const [addMail, setAddMail] = useState(false);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
    <>
      <NavBar />

      {addMail && <AddMail />}
      {create && <CreatePost />}

      <div className="small">
        <section
          onClick={() => dispatch(showCreate())}
          className="max-sm:hidden flex items-center gap-4 bg-white dark:bg-[hsl(200,6%,10%)] px-4 py-2 cursor-pointer"
        >
          <img src={userData?.profile_url || "/avtar.jpg"} className="h-8 w-8 rounded-full" alt="" />
          <div className="border-b w-full text-gray-500 dark:text-[#afa99e] border-gray-300 dark:border-[hsl(197,6%,25%)] text-sm py-3">
            Bismillah! What&apos;s on you mind?
          </div>
        </section>
        <section>
          {"abcd".split("").map((item, index) => {
            return <PostCard key={index} index={index} />;
          })}
        </section>
      </div>
    </>
  );
};

export default HomePage;
