"use client";
import { useState } from "react";
import Styles from "./article.module.css";
import "@mdxeditor/editor/style.css";
import { BsXCircleFill } from "react-icons/bs";
import { ForwardRefEditor } from "./FowardRefEditor";

const ArticleDetails = ({controller}) => {
  const [image, setImage] = useState("");
  return (
    <section>
      {image ? (
        <div>
          <BsXCircleFill
            className="absolute text-xl z-40 cursor-pointer"
            onClick={() => setImage("")}
          />
          <img
            src={URL.createObjectURL(image)}
            className="w-full h-80 object-contain rounded-sm"
            alt=""
          />
        </div>
      ) : (
        <div class="flex items-center justify-center w-full">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              id="dropzone-file"
              type="file"
              class="hidden"
            />
          </label>
        </div>
      )}
      <input
        type="text"
        placeholder="Title"
        className="text-3xl dark:bg-[hsl(0deg_0%_5%)] font-bold mt-5 w-full outline-none"
      />
      <div className={`${Styles.head} mt-4  h-72`}>
        <ForwardRefEditor/>
      </div>
      <div className="border-t absolute bottom-0 w-[97%] py-3 flex justify-end">
        <button onClick={()=>controller(true)} className="bg-black text-white px-4 py-1 rounded-full">
          Next
        </button>
      </div>
    </section>
  );
};

export default ArticleDetails;
