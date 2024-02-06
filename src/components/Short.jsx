import {
  FaCircle,
  FaEllipsisH,
  FaEye,
  FaHourglassHalf,
  FaPlay,
  FaRegCircle,
  FaRegComment,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";
import CircularIcon from "./CirclularIcon";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Short = ({ url, index, count }) => {
  const vid = useRef();
  const [controls, setControls] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.play();
          setControls(false);
          count(index);
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
  }, []);

  function handleClick() {
    controls ? vid.current.play() : vid.current.pause();
    setControls((current) => !current);
  }

  const clipURL = usePathname();

  async function shareClip() {
    const shareData = {
      title: "HilalClips",
      text: "Some clips from hilal link",
      url: `http://hilallink-frontend.vercel.app/${clipURL}`,
    };

    try {
      await navigator.share(shareData);
      console.log("Shared");
    } catch (err) {
      console.log("not Shared");
    }
  }

  return (
    <div
      tabIndex={-1}
      className="outline-none video-container h-full flex justify-start relative"
    >
      <div className="relative">
        <div className="relative h-full">
          {controls && (
            <div className="grid absolute inset-0 place-items-center">
              <CircularIcon className="bg-white text-zinc-950 w-14">
                <FaPlay />
              </CircularIcon>
            </div>
          )}

          <video
            ref={vid}
            onClick={handleClick}
            src={url}
            className="no-scrollbar video max-w-md w-full h-full object-cover snap-end snap-always"
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
            <FaEye className="text-lg" />
          </CircularIcon>
          245K
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaRegHeart className="text-lg" />
          </CircularIcon>
          245K
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaRegComment className="text-lg" />
          </CircularIcon>
          65k
        </div>

        <div onClick={shareClip} className="mb-2">
          <CircularIcon>
            <FaShareAlt className="text-lg" />
          </CircularIcon>
        </div>

        <CircularIcon>
          <FaEllipsisH size={18} />
        </CircularIcon>
      </div>
    </div>
  );
};

export default Short;
