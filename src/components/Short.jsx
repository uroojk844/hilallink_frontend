import {
  FaEllipsisH,
  FaEye,
  FaPlay,
  FaRegComment,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";
import CircularIcon from "./CirclularIcon";
import { useEffect, useRef, useState } from "react";

const Short = () => {
  const vid = useRef();
  const [controls, setControls] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting
          ? entries[0].target.play()
          : entries[0].target.pause();
      },
      {
        threshold: 1,
      }
    );

    observer.observe(vid.current);
    setControls(vid.current.paused);

    // vid.current.on()
  }, []);

  const handleClick = () => {
    controls ? vid.current.play() : vid.current.pause();
    setControls((current) => !current);
  };

  return (
    <div className="video-container h-full flex justify-start relative">
      <div className="relative">
        <div className="relative h-full">
          {controls && (
            <div className="grid absolute inset-0 place-items-center">
              <CircularIcon>
                <FaPlay />
              </CircularIcon>
            </div>
          )}
          <video
            ref={vid}
            onClick={handleClick}
            src="/video2.mp4"
            className="video max-w-md w-full h-full object-cover snap-end snap-always"
          ></video>
        </div>

        {/* bottom content */}
        <div className="absolute bottom-0 w-full text-white p-4 gradient">
          <div className="flex items-center gap-2 mb-2">
            {/* <Avatar /> */}
            <div className="">
              <div className="text font-bold">Urooj Khan</div>
              <div className="text-xs">@uroojk844</div>
            </div>
            <button className="bg-white text-black text-sm py-1.5 px-5 rounded-full">
              Follow
            </button>
          </div>
          <div className="text-xs line-clamp-2">
            Love supporting businesses in the Muslim community!
            #SupportingMuslimBusinesses
          </div>
        </div>
      </div>

      {/* Interactions */}
      <div className="absolute bottom-10 right-0 grid gap-4">
        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaEye size={18} />
          </CircularIcon>
          245K
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaRegHeart size={18} />
          </CircularIcon>
          245K
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaRegComment size={18} />
          </CircularIcon>
          65k
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaShareAlt size={18} />
          </CircularIcon>
          5k
        </div>

        <CircularIcon>
          <FaEllipsisH size={18} />
        </CircularIcon>
      </div>
    </div>
  );
};

export default Short;
