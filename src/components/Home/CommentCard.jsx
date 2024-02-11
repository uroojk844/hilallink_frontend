import React from "react";

const CommentCard = ({ index, data }) => {
  return (
    <div className="flex gap-2 pb-3 mb-3 border-b">
      <img
        src={`https://picsum.photos/400?${index}`}
        className="h-10 w-10 rounded-full"
      />
      <div className="max-sm:text-left">
        <div className="text-sm font-medium capitalize">
          {data.user.username}
          <span className="font-normal text-gray-500 ml-2 text-xs">
            @{data.user.username}
          </span>
        </div>
        <div className="text-[12px] mt-1">
          {data.body}
          {data.body}
          {data.body}
          {data.body}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
