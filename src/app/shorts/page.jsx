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

  const videosList = [
    "https://vod-progressive.akamaized.net/exp=1706963943~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2140%2F13%2F335700933%2F1328586382.mp4~hmac=8887f91ae2bb3318c39740d240bf7882e4be11dadea4e17b7f4c857724618c0b/vimeo-prod-skyfire-std-us/01/2140/13/335700933/1328586382.mp4",
    "https://vod-progressive.akamaized.net/exp=1706953229~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F278%2F20%2F501394917%2F2284786168.mp4~hmac=104077d0fac5a6f1a96d8af11d2b51f225e97a513b6877bf73acc0880bebcbee/vimeo-prod-skyfire-std-us/01/278/20/501394917/2284786168.mp4",
    "https://vod-progressive.akamaized.net/exp=1706953822~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3457%2F15%2F392289251%2F1662078500.mp4~hmac=a34a503fe95f327173f7d42bcd5934e2ac36af9ab04dab85be6353891f3df71f/vimeo-prod-skyfire-std-us/01/3457/15/392289251/1662078500.mp4",
  ];

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
        {videosList.map((data, index) => {
          return <Short url={data} key={index} />;
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
