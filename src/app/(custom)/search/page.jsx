"use client";

import { useState } from "react";
import All from "@/components/Search/All";
import Photos from "@/components/Search/Photos";
import Clips from "@/components/Search/Clips";
import "./search.css";
import People from "@/components/Search/People";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "@/utils/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ShortsPage = () => {
  const menu = {
    All: <All />,
    Photos: <Photos />,
    Clips: <Clips />,
    People: <People />,
  };

  const [current, setCurrent] = useState("All");

  const [items, setItems] = useState([]);

  const searchUsers = async (k, r) => {
    const q = query(
      collection(database, "users"),
      where("name", ">=", k),
      where("name", "<=", k + "\uf8ff")
    );
    const users = await getDocs(q);
    setItems(users.docs?.map((user) => user.data()));
  };

  const router = useRouter();

  return (
    <section className="small">
      <ReactSearchAutocomplete
        formatResult={(item) => {
          return (
            <div className="dark:bg-[hsl(200,6%,10%)]">
              <div className="font-[600]">{item?.name}</div>
              <div className="text-xs">{item?.username}</div>
            </div>
          );
        }}
        placeholder="Search for people or post"
        items={items}
        className="search z-30 sm:mb-2"
        onSelect={(item) => {
          router.push("/profile/" + item.uid);
        }}
        onSearch={searchUsers}
        inputDebounce={100}
      />

      <section className="z-20 flex bg-white dark:bg-[hsl(200,6%,10%)] sm:rounded-md overflow-hidden">
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
