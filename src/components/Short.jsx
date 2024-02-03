import {
  FaCircle,
  FaEllipsisH,
  FaEye,
  FaPlay,
  FaRegCircle,
  FaRegComment,
  FaRegHeart,
  FaShareAlt,
  FaSpinner,
} from "react-icons/fa";
import CircularIcon from "./CirclularIcon";
import { useEffect, useRef, useState } from "react";

const Short = ({ url }) => {
  const vid = useRef();
  const [controls, setControls] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.play();
          setControls(false);
        } else {
          entries[0].target.pause();
          setControls(true);
        }
      },
      {
        threshold: 1,
      }
    );

    observer.observe(vid.current);

    vid.current.addEventListener("ended", () => {
      setControls(true);
    });
    vid.current.addEventListener("emptied", () => {
      setControls(true);
    });
    vid.current.addEventListener("playing", () => {
      setControls(false);
    });
    vid.current.addEventListener("progress", () => {
      setLoading(true);
    });
    vid.current.addEventListener("loadeddata", () => {
      setLoading(false);
    });
    vid.current.addEventListener("canplaythrough", () => {
      setLoading(false);
    });
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
              <CircularIcon className="bg-white text-zinc-950 w-14">
                {loading && !controls ? <FaSpinner /> : <FaPlay />}
              </CircularIcon>
            </div>
          )}
          <video
            ref={vid}
            onClick={handleClick}
            src={url}
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
      <div className=" max-sm:right-4 max-sm:bottom-24 absolute bottom-10 right-0 grid gap-4">
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
