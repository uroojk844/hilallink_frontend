"use client";
import PostCard from "../../components/Home/PostCard";
import CreatePost from "@/components/CreatePost";
import NavBar from "@/components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { showCreate } from "@/redux/togglesSlice";

const HomePage = () => {
  const create = useSelector((state) => state.togglesSlice.createPost);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />

      {create && <CreatePost />}

      <div className="small">
        <section
          onClick={() => dispatch(showCreate())}
          className="flex items-center gap-4 bg-white dark:bg-[hsl(0deg_0%_5%)] px-4 py-2"
        >
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
      </div>
    </>
  );
};

export default HomePage;
