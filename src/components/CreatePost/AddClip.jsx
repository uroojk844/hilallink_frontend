import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";

const AddClip = () => {
  const [video, setVideo] = useState();
  return (
    <div>
      <div className="font-bold mb-2">Add a clip</div>
      {video ? (
        <div className="relative w-[36%] max-sm:w-[52%] overflow-hidden mb-4 rounded-md h-[320px] bg-black mx-auto ">
          <BsFillXCircleFill
            className="text-white text-lg cursor-pointer absolute left-1 top-1 z-50"
            onClick={() => setVideo("")}
          />
          <video
            src={URL.createObjectURL(video)}
            controls
            className="h-full w-full object-contain"
          ></video>
        </div>
      ) : (
        <div class="flex items-center justify-center w-full mt-3">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 dark:border-[hsl(197,6%,25%)] border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-[#afa99e] dark:text-gray-400"
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
              <p class="mb-2 text-sm text-gray-500 dark:text-[#afa99e] dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-[#afa99e] dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              onChange={(e) => setVideo(e.target.files[0])}
              type="file"
              class="hidden"
              accept="video/*"
            />
          </label>
        </div>
      )}

      <input
        type="text"
        className="w-full pt-2 mt-1 text-lg border-t outline-none"
        placeholder="Say something about this clip"
      />
    </div>
  );
};

export default AddClip;
