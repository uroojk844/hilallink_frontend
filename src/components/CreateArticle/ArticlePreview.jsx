"use client";
import { BsArrowLeft } from "react-icons/bs";
const ArticlePreview = ({ controller }) => {
  return (
    <div className="glass inset-0 fixed z-50 grid place-items-center">
      <div className="w-[min(100%,520px)] bg-white dark:bg-[hsl(200,6%,10%)] rounded-md overflow-hidden">
        <section className="flex items-center gap-3 p-2 border-b">
          <img
            src="https://picsum.photos/400"
            className="h-8 w-8 rounded-full"
            alt=""
          />
          <div className="text-md font-bold">Mohd Belal Naim</div>
        </section>
        <section className="p-3">
          <div className="overflow-hidden rounded-md bg-blue-100">
            <img
              src="https://picsum.photos/400?1"
              className="w-full h-80 object-cover"
              alt=""
            />
            <div className="font-medium p-3 text-blue-600">
              How tech is chaning the world
            </div>
          </div>
        </section>
        <section className="p-2 border-t flex justify-between cursor-pointer">
          <div
            className="flex items-center text-sm gap-3"
            onClick={() => controller(false)}
          >
            <BsArrowLeft className="text-lg" /> Go back
          </div>
          <button className="bg-black text-white px-4 py-1 rounded-full">
            Publish
          </button>
        </section>
      </div>
    </div>
  );
};

export default ArticlePreview;
