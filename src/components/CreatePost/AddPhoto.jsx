import { useState } from "react";
import Cropper from "react-easy-crop";
import { BsXCircleFill } from "react-icons/bs";
import { LuRectangleHorizontal, LuRectangleVertical } from "react-icons/lu";
import { PiSquareBold } from "react-icons/pi";

const aspectRatios = [
  {
    aspect: 1 / 1,
    icon: <PiSquareBold className="text-2xl" />,
  },
  {
    aspect: 16 / 9,
    icon: <LuRectangleHorizontal className="text-2xl" />,
  },
  {
    aspect: 9 / 16,
    icon: <LuRectangleVertical className="text-2xl" />,
  },
];

const AddPhoto = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [image, setImage] = useState("");
  const [aspect, setAspect] = useState(1 / 1);

  return (
    <>
      {image ? (
        <section>
          <div className="relative h-[400px] overflow-hidden rounded">
            <BsXCircleFill
              className="text-xl absolute text-white left-1 top-1 z-50 shadow-md cursor-pointer"
              onClick={() => setImage("")}
            />
            <Cropper
              image={URL.createObjectURL(image)}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              onCropChange={setCrop}
            />
          </div>
          <div className="flex justify-center gap-5 cursor-pointer mt-3">
            {aspectRatios.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setAspect(item.aspect)}
                  className={`${
                    item.aspect == aspect && "bg-blue-100"
                  } p-3 text-blue-600 rounded-full`}
                >
                  <div className="grid place-items-center">{item.icon}</div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <>
          <div className="font-bold mb-2">Add a photo</div>
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
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
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
        </>
      )}
      <div className="mt-2 cursor-pointer">
        <input
          type="text"
          className="w-full pt-2 mt-1 text-lg border-t outline-none"
          placeholder="Say something about this photo"
        />
      </div>
    </>
  );
};

export default AddPhoto;
