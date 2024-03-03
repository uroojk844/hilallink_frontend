import { hideCreate } from "@/redux/togglesSlice";
import { useEffect, useRef, useState } from "react";
import { BiPoll } from "react-icons/bi";
import {
  FaEdit,
  FaGlobe,
  FaRegImage,
  FaRegImages,
  FaRegSmile,
  FaTimes,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
const CreatePost = () => {
  const [text, setText] = useState("");
  const [fileSrc, setFileSrc] = useState("");
  const [fileType, setFileType] = useState("");
  const [placeHolder, setPlaceHolder] = useState(true);

  const dispatch = useDispatch()

  let file = "";

  function selectFile(e) {
    file = e.target.files[0];
    console.log(file);
    if (file) {
      setFileType(file.type);
      const url = URL.createObjectURL(file);
      setFileSrc(url);
    }
  }

  function clearFile() {
    file = "";
    setFileType("");
    setFileSrc("");
  }


  const createPostRef  = useRef(null)
  useEffect(()=>{
    document.addEventListener("click",handleClickOutside)
    return ()=>{
      document.removeEventListener("click",handleClickOutside)
    }
  },[])
  function handleClickOutside(e){
    if(createPostRef && !createPostRef.current.contains(e.target)){
      dispatch(hideCreate())
    }
  }
  return (
    <section
      className="fixed inset-0 glass z-50 grid place-items-center"
    >
      <div ref={createPostRef} className="rounded-xl bg-white dark:bg-[hsl(0deg_0%_5%)] w-[min(550px,95%)]">

        <div className="p-4 grid grid-cols-[max-content,auto] gap-4 items-center">
          <img
            src="http://picsum.photos/40.webp"
            className="w-10 self-start grid-rows-2 h-10 object-cover rounded-full"
          />

          <div>
            {/* textarea */}
            <div
              className="flex-1 grid content-center border-b outline-none py-2 text-black max-h-[300px] overflow-auto"
              onFocus={() => setPlaceHolder(false)}
              onBlur={() => setPlaceHolder(true && !text.length)}
              contentEditable={true}
              onInput={(e) => setText(e.target.innerText.trim())}
            >
              {placeHolder && (
                <span className="text-slate-500">
                  Bismillah! Write here, you want to say...
                </span>
              )}
            </div>
            {/* textarea end */}

            {/* picked file(image/video) previewer */}
            {fileSrc && (
              <div className="relative h-80 m-[24px_64px_8px_0]">
                {fileType.includes("image") ? (
                  <img
                    src={fileSrc}
                    className="object-cover size-full rounded-xl"
                  />
                ) : (
                  <video
                    src={fileSrc}
                    className="object-cover w-full rounded-xl"
                    controls
                  ></video>
                )}
                <div
                  onClick={clearFile}
                  className="absolute top-2 right-2 size-6 bg-black/40 grid place-items-center rounded-full text-white cursor-pointer"
                >
                  <FaTimes size={14} />
                </div>
              </div>
            )}

            {/* options */}
            <div className="flex pt-3 items-center gap-4 text-lg text-gray-400">
              <label className="cursor-pointer" title="Add image">
                {fileSrc ? <FaRegImages /> : <FaRegImage />}
                <input
                  onInput={selectFile}
                  type="file"
                  className="hidden"
                  accept="image/*,video/*"
                />
              </label>
              {!fileSrc && (
                <>
                  <FaEdit />
                  {/* <BiPoll />
                  <FaRegSmile /> */}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex px-4 justify-between items-center my-3">
          <span className="text-slate-500 text-sm flex gap-2 items-center">
            <FaGlobe /> Everyone can reply
          </span>
          <button className="bg-gray-400 text-white py-1.5 px-6 rounded-full">
            Post
          </button>
        </div>
        <div className="border-t text-center py-3 text-[10px]">
          <q>
            The Momin is the one from whom the people&apos;s lives and wealth are
            safe

          </q>{" "}
          - Prophet Mohammed PBUH.
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
