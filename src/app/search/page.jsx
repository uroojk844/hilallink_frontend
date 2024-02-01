"use client";

import { useState } from "react";
import All from "../components/Search/All";
import Photos from "../components/Search/Photos";
import Clips from "../components/Search/Clips";

const ShortsPage = () => {
  const menu = {
    All: <All />,
    Photos: <Photos />,
    Clips: <Clips />,
  };

  const [current, setCurrent] = useState("All");

  return (
    <section>
      
      <section className="sticky top-14 shadow-lg z-20 flex bg-white mt-2 rounded-md overflow-hidden">
        {Object.keys(menu).map((item, index) => {
          return (
            <div
              key={index}
              className={`cursor-pointer py-3 px-4 font-medium text-sm ${
                item == current && "border-b-4 border-primary"
              }`}
              onClick={() => setCurrent(item)}
            >
              {item}
            </div>
          );
        })}
      </section>

      <section>{menu[current]}</section>
    </section>
  );
};

export default ShortsPage;
