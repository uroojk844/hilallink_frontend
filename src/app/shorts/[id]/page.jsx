"use client";
import CircularIcon from "@/components/CirclularIcon";
import Short from "@/components/Short";
import VideoStore from "@/store/videoStore";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ShortsPage = () => {
  const shortsContainer = useRef(null);
  const router = useRouter();
  const videos = useContext(VideoStore);
  const { id } = useParams();
  const top = useRef(videos.findIndex((v) => v.id === id));
  const path = "https://res.cloudinary.com/dvz1oehqm/video/upload/";

  useEffect(() => {
    document.querySelectorAll("#shortsContainer > div")[top.current].focus();
  }, []);

  const moveScroll = () => {
    const { id } = videos[top.current];
    router.replace(`/shorts/${id}`);
  };

  const scrollUp = () => {
    if (top.current == videos.length - 1) return;
    top.current += 1;
    moveScroll();
  };

  const scrollDown = () => {
    if (top.current == 0) return;
    top.current -= 1;
    moveScroll();
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
        <CircularIcon disabled={top.current == videos.length - 1}>
          <FaChevronDown />
        </CircularIcon>
      </div>

      <div
        ref={shortsContainer}
        id="shortsContainer"
        className="h-full overflow-y-auto w-full max-w-lg snap-y snap-mandatory snap-always no-scrollbar"
      >
        {videos.map((video) => {
          return (
            <Short
              url={`${path}${video.id}/video/${video.name}`}
              key={video.id}
            />
          );
        })}
      </div>

      <div
        onClick={scrollDown}
        className="max-sm:hidden absolute top-1/2 -translate-y-1/2 right-4"
      >
        <CircularIcon disabled={top.current == 0}>
          <FaChevronUp />
        </CircularIcon>
      </div>
    </section>
  );
};

export default ShortsPage;
