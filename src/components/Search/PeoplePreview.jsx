import React from "react";
import { BsArrowRight } from "react-icons/bs";
import PeopleCard from "./PeopleCard";

const PeoplePreview = () => {
  return (
    <section className="bg-white rounded-md mt-2 overflow-hidden">
      <div className="text-lg font-bold px-3 py-2">People</div>
      <section>
        {"abc".split("").map((index, item) => {
          return <PeopleCard index={index} key={index} />;
        })}
      </section>
      <div className="text-sm py-3 flex items-center justify-center gap-3">
        View All People <BsArrowRight />
      </div>
    </section>
  );
};

export default PeoplePreview;
