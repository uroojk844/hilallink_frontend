import React from "react";
import PostCard from "../Home/PostCard";
import Clips from "./ClipsPreview";
import PeoplePreview from "./PeoplePreview";

const AllResults = () => {
  return (
    <>
      <PeoplePreview/>
      <Clips />
      {"abcd".split("").map((item, index) => {
        return <PostCard key={index} index={index} />;
      })}
    </>
  );
};

export default AllResults;
