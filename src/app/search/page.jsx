"use client";

import { useState } from "react";
import All from "../../components/Search/All";
import Photos from "../../components/Search/Photos";
import Clips from "../../components/Search/Clips";
import { BsSearch } from "react-icons/bs";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./search.css"
import { useRouter } from "next/navigation";

const ShortsPage = () => {
  const menu = {
    All: <All />,
    Photos: <Photos />,
    Clips: <Clips />,
  };
  const items = [
    {
      id: 1,
      name: "Belal",
    },
    {
      id: 2,
      name: "Urooj",
    },
    {
      id: 3,
      name: "Nesar",
    },
  ];
  const router = useRouter()
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  const handleSelect = () => {
    router.push("/search-results")
  }
  const [current, setCurrent] = useState("All");

  return (
    <section>
      <section className="mt-2">
        <ReactSearchAutocomplete
          formatResult={formatResult}
          placeholder="Search for people or post"
          items={items}
          className="z-50"
          onSelect={handleSelect}
        />
      </section>
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
