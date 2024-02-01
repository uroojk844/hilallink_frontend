"use client";
import CircularIcon from "@/components/CirclularIcon";
import Short from "@/components/Short";
import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShortsPage = () => {
  const shortsContainer = useRef(null);

  const top = useRef(0);

  const moveScroll = () => {
    shortsContainer.current.scrollTo({
      top: top.current,
      left: 0,
      behavior: "smooth",
    });
  };
  const [length, setLength] = useState(0);

  const scrollUp = () => {
    if (
      top.current <
      shortsContainer.current.scrollHeight - 2 * window.innerHeight
    ) {
      top.current += window.innerHeight;
      moveScroll(top.current);
      setLength(1);
    } else {
      setLength(-1);
    }
  };

  const scrollDown = () => {
    if (top.current > 0) {
      top.current -= window.innerHeight;
      moveScroll(top.current);
      setLength(1);
    } else {
      setLength(0);
    }
  };

  useEffect(() => {
    window.onkeyup = (e) => {
      e.key == "ArrowDown" && scrollUp();
      e.key == "ArrowUp" && scrollDown();
    };
  }, []);

  return (
    <section className="absolute bg-black/80 w-full h-dvh inset-0 grid place-items-center">
      <div
        onClick={scrollUp}
        className="max-sm:hidden absolute top-1/2 -translate-y-1/2 left-4"
      >
        <CircularIcon disabled={length == -1}>
          <FaChevronDown />
        </CircularIcon>
      </div>

      <div
        ref={shortsContainer}
        className="h-full overflow-y-auto w-full max-w-lg snap-y snap-mandatory snap-always no-scrollbar"
      >
        {"abcdgdsj".split("").map((data, index) => {
          return <Short key={index} />;
        })}
      </div>

      <div
        onClick={scrollDown}
        className="max-sm:hidden absolute top-1/2 -translate-y-1/2 right-4"
      >
        <CircularIcon disabled={length == 0}>
          <FaChevronUp />
        </CircularIcon>
      </div>
    </section>
  );
};

export default ShortsPage;
