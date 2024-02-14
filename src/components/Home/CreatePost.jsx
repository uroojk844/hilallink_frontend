import React from "react";
import { BsAt, BsFilm, BsImage, BsNewspaper, BsPersonAdd, BsPersonCheck, BsXCircle, BsXCircleFill } from "react-icons/bs";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LuFileEdit } from "react-icons/lu";

import AddPhoto from "../CreatePost/AddPhoto";
import AddTextPost from "../CreatePost/AddTextPost";
import GradientIcon from "../CreatePost/GradientIcon";
import AddClip from "../CreatePost/AddClip";
import { useRouter } from "next/navigation";

export const CreatePost = ({ controller }) => {

  const menu = {
    "text": <AddTextPost />,
    "photo": <AddPhoto />,
    "clips": <AddClip/>
  }
  const [current, setCurrent] = useState("text")
  const router = useRouter()
  return (
    <section className="inset-0 glass fixed z-50 grid place-items-center">
      <div className="w-[min(500px,95%)] bg-white rounded-md overflow-hidden">
        <div className="py-3 items-center px-2 text-center border-b text-lg flex justify-between">
          <BsXCircle
            className="text-2xl cursor-pointer"
            onClick={() => controller(false)}
          />
          <div>Create a post</div>
          <div className="text-sm">Drafts</div>
        </div>
        <div className="p-3">{menu[current]}</div>
        <div className="px-2 border-t">
          <Select>
            <SelectTrigger className="w-full border-none focus:outline-none">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="everyone">
                <div className="flex items-center gap-2">
                  <BsPersonCheck className="text-lg" /> Everyone on HilalLink
                </div>
              </SelectItem>
              <SelectItem value="mention">
                <div className="flex items-center gap-2">
                  <BsAt className="text-lg" /> Accounts you mention
                </div>
              </SelectItem>
              <SelectItem value="follow">
                <div className="flex items-center gap-2">
                  <BsPersonAdd className="text-lg" /> Accounts you follow
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="py-2 border-t px-3 flex justify-between">
          <div className="flex items-center gap-5 text-gray-500">
            <BsImage
              onClick={() => setCurrent("photo")}
              className="cursor-pointer text-2xl"
            />
            <BsFilm
              onClick={() => setCurrent("clips")}
              className="cursor-pointer text-2xl"
            />
            <LuFileEdit
              onClick={() => router.push("/create-article")}
              className="cursor-pointer text-2xl"
            />
            <div onClick={()=>setCurrent("text")}>
              <GradientIcon />
            </div>
          </div>
          <button className="bg-black text-white rounded-full px-4 py-1">
            Post
          </button>
        </div>
      </div>
    </section>
  );
};
export default CreatePost;
