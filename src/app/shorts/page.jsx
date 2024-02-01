"use client";
import CircularIcon from "@/components/CirclularIcon";
import Short from "@/components/Short";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { InView } from "react-intersection-observer";

const ShortsPage = () => {
  return (
    <section className="absolute bg-black/80 w-full h-dvh inset-0 grid place-items-center">
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <CircularIcon>
          <FaChevronDown />
        </CircularIcon>
      </div>

      <div className="h-full overflow-y-auto w-full max-w-lg snap-y snap-mandatory snap-always no-scrollbar">
        {"abcdgdsj".split("").map((data, index) => {
          return <Short key={index} />;
        })}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <CircularIcon>
          <FaChevronUp />
        </CircularIcon>
      </div>
    </section>
  );
};

export default ShortsPage;
