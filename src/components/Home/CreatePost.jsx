import React from "react";
import { BsXCircle, BsXCircleFill } from "react-icons/bs";
import { useState } from "react";
import Cropper from "react-easy-crop";
import { LuRectangleHorizontal, LuRectangleVertical } from "react-icons/lu";
import { PiSquareBold } from "react-icons/pi";

export const CreatePost = ({ controller }) => {
  const [current, setCurrent] = useState("black");
  const colors = ["tomato", "black", "green", "magenta"];
  const [toggle, setToggle] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState("");
  const [aspect, setAspect] = useState(1 / 1);
  return (
    <section className="inset-0 glass fixed z-50 grid place-items-center">
      <div className="w-[min(500px,100%)] bg-white rounded-md overflow-hidden">
        <div className="py-3 text-center border-b text-lg relative">
          <BsXCircle
            className="absolute text-2xl left-3 cursor-pointer"
            onClick={() => controller(false)}
          />
          Create a post
        </div>
        <div className="p-3">
          {!toggle ? (
            <>
              {image ? (
                <section>
                  <div className="relative h-[400px] overflow-hidden rounded">
                    <BsXCircleFill className="text-xl absolute text-white left-1 top-1 z-50 shadow-md cursor-pointer" onClick={()=>setImage("")} />
                    <Cropper
                      image={URL.createObjectURL(image)}
                      crop={crop}
                      zoom={zoom}
                      aspect={aspect}
                      onCropChange={setCrop}
                    />
                  </div>
                  <div className="text-center text-lg py-2">Aspect ratio</div>
                  <div className="flex justify-center gap-5 cursor-pointer">
                    <div
                      onClick={() => setAspect(1 / 1)}
                      className="flex-col bg-blue-100 px-4 py-1 text-blue-600 rounded-md"
                    >
                      <PiSquareBold className="text-3xl font-bold" />
                      <div className="text-center">1:1</div>
                    </div>
                    <div
                      onClick={() => setAspect(16 / 9)}
                      className="flex-col bg-blue-100 px-4 py-1 text-blue-600 rounded-md"
                    >
                      <LuRectangleHorizontal className="text-3xl" />
                      <div className="text-center">16:9</div>
                    </div>
                    <div
                      onClick={() => setAspect(3 / 4)}
                      className="flex-col bg-blue-100 px-4 py-1 text-blue-600 rounded-md"
                    >
                      <LuRectangleVertical className="text-3xl" />
                      <div className="text-center">3:4</div>
                    </div>
                  </div>
                </section>
              ) : (
                <div className="flex items-center justify-center w-full relative">
                  <label
                    htmlFor="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col  items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      id="dropzone-file"
                      type="file"
                      class="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
              )}{" "}
              <div className="flex mt-2 items-center cursor-pointer">
                <input
                  type="text"
                  className="w-full p-3 text-xl"
                  placeholder="Say something about this photo"
                />
                <div
                  className="rounded text-sm font-bold  text-white h-10 w-10 grid place-items-center bg-black"
                  style={{
                    backgroundImage: "url('./gradient.jpg')",
                    backgroundSize: "cover",
                  }}
                  onClick={() => setToggle(true)}
                >
                  <span className="drop-shadow-md">Abc</span>
                </div>
              </div>
            </>
          ) : (
            <div
              className={`h-[280px] text-2xl relative font-bold rounded-md text-white grid place-items-center`}
              style={{ backgroundColor: current }}
            >
              <span className="placeholder">What's on your mind?</span>

              <div className="flex items-center absolute gap-2 mt-3 bottom-2 left-2">
                <div>
                  <BsXCircleFill
                    className="cursor-pointer"
                    onClick={() => setToggle(false)}
                  />
                </div>
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
          )}
        </div>
        <div className="py-2 border-t px-3">
          <button className="bg-black text-white py-2 rounded-sm w-full">
            Post
          </button>
        </div>
      </div>
    </section>
  );
};
export default CreatePost;
