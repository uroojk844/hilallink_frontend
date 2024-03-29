"use client";

import { useRef, useState, useEffect } from "react";
import Photos from "@/components/Search/Photos";
import Clips from "@/components/Search/Clips";
import People from "@/components/Search/People";
import AllResults from "@/components/Search/AllResults";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const SearchResult = () => {
  const menu = {
    All: <AllResults />,
    Clips: <Clips />,
    People: <People />,
    Photos: <Photos />,
  };

  const [current, setCurrent] = useState("All");

  const filterBar = useRef();

  const [lastPos, setLastPos] = useState(0);
  useEffect(() => {
    window.onscrollend = () => {};
  }, []);

  return (
    <section className="small">
      <section className="shadow-lg z-20 bg-white dark:bg-[hsl(200,6%,10%)] mt-2 rounded-md overflow-hidden">
        <section className="text-lg font-bold p-3 flex items-center gap-4">
          <Link href="/search">
            <BsArrowLeft />
          </Link>
          Search resuts for <q>Dr. Hussain</q>
        </section>
        <section className="flex">
          {Object.keys(menu).map((item, index) => {
            return (
              <div
                key={index}
                ref={filterBar}
                // onScroll={showFilters}
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
      </section>

      <section>{menu[current]}</section>
    </section>
  );
};

export default SearchResult;
