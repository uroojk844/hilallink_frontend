import React from "react";
import PostCard from "../Home/PostCard";
import Clips from "./ClipsPreview";

const All = () => {
  return (
    <>
      <Clips />
      {"abcd".split("").map((item, index) => {
        return <PostCard key={index} index={index} />;
      })}
    </>
  );
};

export default All;
