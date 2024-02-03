import React from "react";
import PostCard from "../Home/PostCard";
import Clips from "./ClipsPreview";
import PeoplePreview from "./PeoplePreview";

const All = () => {
  return (
    <>
      <Clips />
      <PeoplePreview/>
      {"abcd".split("").map((item, index) => {
        return <PostCard key={index} index={index} />;
      })}
    </>
  );
};

export default All;
