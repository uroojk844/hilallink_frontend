import { useState } from "react";

const AddTextPost = () => {
  const [current, setCurrent] = useState("black");
  const colors = ["tomato", "black", "green", "magenta"];
  return (
    <div
      className={`h-[280px] text-2xl relative font-bold rounded-md text-white grid place-items-center`}
      style={{ backgroundColor: current }}
    >
       <textarea autoFocus className="placeholder:text-white bg-transparent resize-none no-scrollbar text-center outline-none
       " placeholder="What's on your mind?"></textarea>

      <div className="flex items-center absolute gap-2 mt-3 bottom-2 left-2">
        {colors.map((item, index) => {
          return (
            <div
              key={index}
              className={`h-8 w-8 rounded-md cursor-pointer ${
                current == item && "border-2 border-white"
              }`}
              onClick={() => setCurrent(item)}
              style={{ backgroundColor: item }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default AddTextPost;
