"use client";

import { useState } from "react";
import All from "@/components/Search/All";
import Photos from "@/components/Search/Photos";
import Clips from "@/components/Search/Clips";
import "./search.css";
import People from "@/components/Search/People";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const ShortsPage = () => {
  const menu = {
    All: <All />,
    Photos: <Photos />,
    Clips: <Clips />,
    People: <People />,
  };

  const [current, setCurrent] = useState("All");

  return (
    <section className="small">
      <ReactSearchAutocomplete
        formatResult={() => {}}
        placeholder="Search for people or post"
        items={[]}
        className="lg:hidden search z-30 sm:mb-2"
        onSelect={() => {}}
      />

      <section className="z-20 flex bg-white sm:rounded-md overflow-hidden">
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

      <section className="sm:mt-2">{menu[current]}</section>
    </section>
  );
};

export default ShortsPage;
