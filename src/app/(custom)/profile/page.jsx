"use client";
import PostCard from "@/components/Home/PostCard";
import NavBarBack from "@/components/NavBarBack";
import ProfileActions from "@/components/Profile/ProfileActions";
import { useEffect, useRef, useState } from "react";
import {
  BsBell,
  BsBoxArrowUpRight,
  BsClockHistory,
  BsEnvelope,
  BsGeoAltFill,
  BsGridFill,
  BsPersonPlusFill,
  BsThreeDotsVertical,
} from "react-icons/bs";

const Profile = () => {
  const [actions, setActions] = useState(false);
  const menu = ["All", "Photos", "Clips"];
  const [current, setCurrent] = useState("All");

  const menuRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setActions(false);
      }
    });

    return () => {
      document.addEventListener("click", (e) => {});
    };
  }, []);

  return (
    <>
      <div className="medium">
        <div className="bg-white sm:rounded-md overflow-hidden">
          <img
            src="https://picsum.photos/1200"
            className="h-[160px] object-cover w-full"
            alt=""
          />
          <section className="grid grid-cols-3 max-sm:grid-cols-2 bg-white py-3 px-3">
            <div className="relative">
              <img
                src="https://picsum.photos/400"
                className="h-36 w-36 absolute -bottom-2 left-2 rounded-full border-4 border-white  max-sm:h-28 max-sm:w-28 max-sm:left-0"
                alt=""
              />
            </div>
            <div className="flex text-sm justify-between items-center relative -left-8 max-sm:gap-4">
              <div className="text-center">
                222 <span className="text-gray-500">Following</span>
              </div>
              <div className="text-center">
                101K <span className="text-gray-500">Followers</span>
              </div>
            </div>
            <div className="flex justify-end gap-2 max-sm:hidden">
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={() => setActions(!actions)}
                  className="bg-gray-100 flex self-start items-center text-sm gap-2 p-1.5 rounded-full"
                >
                  <BsThreeDotsVertical className="text-lg" />
                </button>
                {actions && <ProfileActions refProp={menuRef} />}
              </div>
              <button className="bg-gray-100 flex self-start items-center text-sm gap-2 p-1.5 rounded-full">
                <BsEnvelope className="text-lg" />
              </button>
              <button className="bg-gray-100 flex self-start items-center text-sm gap-2 p-1.5 rounded-full">
                <BsBell className="text-lg" />
              </button>
              <button className="bg-black text-white flex self-start items-center text-sm py-1.5 gap-2 px-3 rounded-full">
                <BsPersonPlusFill />
                Follow
              </button>
            </div>
          </section>
          <section className="p-5 bg-gray-100">
            <div className="text-lg font-bold">Dr. Alama Hussain Madani</div>
            <div className="text-gray-500 text-sm">@DrMadani</div>
            <div className="text-sm mt-4 max-sm:text-xs max-sm:mt-3">
              Official account of Dr. Alama Hussain Madani. Nurturing hearts and
              minds in the light of Quranic wisdom since 1980. Embracing
              knowledge, faith, and community. 📖🌟 #MadarsaHanfiya
            </div>

            <div className="grid grid-cols-4 max-sm:grid-cols-2 mt-4 gap-5 text-xs max-sm:mt-4">
              <div className="flex items-center gap-1 text-gray-500">
                <BsGridFill />
                Religious institution
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <BsGeoAltFill /> Lucknow, India
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <BsClockHistory /> Joined 11-2-2023
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <BsBoxArrowUpRight /> www.mhzq.in
              </div>
            </div>
          </section>
          <section className="bg-gray-100 max-sm:flex gap-4 px-4 pb-4 hidden ">
            <div className="bg-white p-2 rounded-full">
              <BsEnvelope className="text-lg" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <BsThreeDotsVertical className="text-lg" />
            </div>
            <div className="bg-white p-2 rounded-full">
              <BsBell className="text-lg" />
            </div>
            <button className="bg-black text-white w-full text-sm rounded-full">
              Follow
            </button>
          </section>
          <section className="flex border-t bg-gray-100">
            {menu.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurrent(item)}
                  className={`cursor-pointer hover:bg-gray-200 text-sm py-3 px-4 ${
                    item == current && "border-b-4 border-primary"
                  } max-sm:text-xs`}
                >
                  {item}
                </div>
              );
            })}
          </section>
        </div>

        <div>
          {"abcd".split("").map((item, index) => {
            return <PostCard index={index} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;