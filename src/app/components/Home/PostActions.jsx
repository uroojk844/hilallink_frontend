import {
  BsBookmark,
  BsSend,
} from "react-icons/bs";
import { VscWarning } from "react-icons/vsc";
import { MdBlock } from "react-icons/md";

const PostActions = () => {
  return (
    <div className="absolute overflow-hidden bg-white rounded-lg z-10 shadow-lg right-1 top-1">
      <div className="hover:bg-gray-200 cursor-pointer flex gap-2 items-center p-2 text-sm">
        <BsBookmark /> Save post
      </div>
      <div className="hover:bg-gray-200 cursor-pointer flex gap-2 items-center p-2 text-sm">
        <BsSend /> Share post
      </div>
      <div className="hover:bg-gray-200 cursor-pointer flex gap-2 items-center p-2 text-sm">
        <VscWarning /> Report
      </div>
      <div className="hover:bg-gray-200 cursor-pointer flex gap-2 items-center p-2 text-sm">
        <MdBlock />
        Block @DrMadani
      </div>
    </div>
  );
};

export default PostActions;
