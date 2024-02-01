import {
  FaEllipsisH,
  FaEye,
  FaRegComment,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";
import CircularIcon from "./CirclularIcon";
import { InView } from "react-intersection-observer";

const Short = () => {
  const toggleMode = (inView, entry) => {
    console.log(entry);
    if (inView) {
      // entry.target.play();
      entry.target.loop = true;
    } else {
      // entry.target.pause();
      entry.target.loop = false;
    }
  };
  return (
    <div className="h-full flex justify-start relative">
      <div className="relative">
        <InView
          as="video"
          onChange={(inView, entry) => toggleMode(inView, entry)}
          src="/short.mp4"
          className=" max-w-md w-full h-full object-cover snap-end snap-always"
        ></InView>

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
            <FaEye />
          </CircularIcon>
          245K
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaRegHeart />
          </CircularIcon>
          245K
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaRegComment />
          </CircularIcon>
          65k
        </div>

        <div className="text-white text-xs text-center grid gap-1">
          <CircularIcon>
            <FaShareAlt />
          </CircularIcon>
          5k
        </div>

        <CircularIcon>
          <FaEllipsisH />
        </CircularIcon>
      </div>
    </div>
  );
};

export default Short;
