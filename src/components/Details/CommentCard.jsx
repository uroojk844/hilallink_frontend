import { BsChat, BsHeart, BsRepeat, BsThreeDots } from "react-icons/bs";

const CommentCard = () => {
  return (
    <div className="flex gap-3 border-b py-4">
      <img src="/avtar.jpg" className="h-8 w-8 rounded-full" alt="" />
      <div>
        <div className="font-medium flex justify-between">
          <div>Sajad Khaki</div>
          <div className="font-normal gap-4 text-sm flex items-center text-gray-500 dark:text-[#afa99e]">
            <span>4h</span>
            <BsThreeDots />
          </div>
        </div>
        <div className="text-sm text-gray-500 dark:text-[#afa99e]">
          @sajadkhaki09
        </div>
        <div className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequatur nemo veritatis nihil nisi, ab et eaque dolores aspernatur,
        </div>
        <div className="flex gap-3 mt-3">
          <BsHeart />
          <BsChat />
          <BsRepeat />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
