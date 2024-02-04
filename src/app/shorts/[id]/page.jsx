"use client";
import CircularIcon from "@/components/CirclularIcon";
import Short from "@/components/Short";
import VideoStore from "@/store/videoStore";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShortsPage = () => {
  const shortsContainer = useRef(null);
  const router = useRouter();
  const videos = useContext(VideoStore);
  const top = useRef(0);

  const moveScroll = () => {
    shortsContainer.current.scrollTo({
      top: top.current * window.innerHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  const [length, setLength] = useState(0);

  const scrollUp = () => {
    if (top.current < top.current.length) {
      top.current++;
      router.push("/shorts/" + videos[top.current]);
      // moveTo();
      // setLength(1);
      // } else {
      // setLength(-1);
    }

    // if (
    //   top.current <
    // ) {
    //   moveScroll(top.current);
    //   setLength(1);
    // } else {
    //   setLength(-1);
    // }
  };

  const scrollDown = () => {
    if (top.current > 0) {
      top.current--;
      router.push("/shorts/" + videos[top.current]);
      //   moveTo();

      //   setLength(1);
      // } else {
      //   setLength(0);
    }
    // if (top.current > 0) {
    //   top.current -= window.innerHeight;
    //   moveScroll(top.current);
    // } else {
    // }
  };

  useEffect(() => {
    window.onkeyup = (e) => {
      e.key == "ArrowDown" && scrollUp();
      e.key == "ArrowUp" && scrollDown();
    };
  }, []);

  const videosList = [
    "https://res.cloudinary.com/dvz1oehqm/video/upload/v1706959345/video/nn1xmlqtweck3j0durdm.mp4",
    "http://res.cloudinary.com/dvz1oehqm/video/upload/v1706959344/video/jikht7ootixcwf9a5alb.mp4",
    "http://res.cloudinary.com/dvz1oehqm/video/upload/v1706959639/video/jfa8nxn3sxwtqqswh1e5.mp4",
    "http://res.cloudinary.com/dvz1oehqm/video/upload/v1706959599/video/iwvn9mmlubrgtnwke7cm.mp4",
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
