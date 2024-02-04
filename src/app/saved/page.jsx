"use client";
import Clips from "@/components/Saved/Clips";
import Photos from "@/components/Saved/Photos";
import { useState } from "react";

const page = () => {
  const menu = {
    Photos: <Photos />,
    Clips: <Clips />,
  };
  const [current, setCurrent] = useState("Photos");
  return (
    <>
      <section className="bg-white rounded-md overflow-hidden mt-2">
        <div className="text-lg font-bold px-2 pt-3">Saved posts</div>
        <div className="flex">
          {Object.keys(menu).map((item,index) => {
            return (
              <div
                key={index}
                onClick={()=>setCurrent(item)}
                className={`p-3 text-sm cursor-pointer ${
                  item == current && "border-b-4 border-primary"
                }`}
              >
                {item}
              </div>
            );
          })}
         
        </div>
      </section>
      <section>{menu[current]}</section>
    </>
  );
};

export default page;
