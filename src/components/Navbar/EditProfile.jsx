"use client";
import "animate.css"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsCamera, BsShieldCheck, BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { hideEdit } from "@/redux/togglesSlice";

const EditProfile = ({ toggleEdit }) => {
  const dispatch = useDispatch()
  return (
    <section className="fixed inset-0 glass z-50 grid place-items-center">
      <div className="animate__animated animate__bounceIn w-[min(520px,96%)] bg-white rounded-md overflow-hidden">
        <div className="p-3 text-lg font-bold flex items-center gap-3">
          <BsX className="text-xl cursor-pointer" onClick={()=>dispatch(hideEdit())} /> Edit Profile
        </div>
        <div className="relative">
          <BsCamera className="absolute cursor-pointer z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          <img
            src="https://picsum.photos/800"
            className="w-full h-[140px] object-cover brightness-50 "
            alt=""
          />
        </div>
        <div className="p-3 pt-4 relative">
          <div className="absolute -top-20 left-4">
            <div className="relative">
              <div className="absolute grid place-items-center h-full w-full rounded-full">
                <BsCamera className="text-white z-40 text-2xl cursor-pointer" />
              </div>
              <img
                src="https://picsum.photos/400?1"
                className="brightness-50 h-28 w-28 rounded-full border-4 border-white"
                alt=""
              />
            </div>
          </div>
          <div className="mt-8 h-[280px] overflow-scroll">
            <div className="mb-4">
              <div className="text-xs text-gray-500">Full Name</div>
              <input
                type="text"
                value="Mohd Belal Naim"
                className="text-sm border-b w-full border-black py-2"
              />
            </div>
            <div className="mb-4">
              <div className="text-xs text-gray-500">Username</div>
              <input
                type="text"
                value="belalnaim9"
                className="text-sm border-b w-full border-black py-2"
              />
            </div>
            <div className="mb-4">
              <div className="text-xs text-gray-500">Category</div>
              <input
                type="text"
                value="Religious Institution"
                className="text-sm border-b w-full border-black py-2"
              />
            </div>
            <div className="mb-4">
              <div className="text-xs text-gray-500">Location</div>
              <input
                type="text"
                value="Lucknow, India"
                className="text-sm border-b w-full border-black py-2"
              />
            </div>
            <div className="mb-4">
              <div className="text-xs text-gray-500">Birth Date</div>
              <input
                type="date"
                className="text-sm border-b w-full border-black py-2"
              />
            </div>
            <div className="text-xs text-gray-500">Gender</div>
            <div className="mb-4">
              <Select>
                <SelectTrigger className="w-full p-0 text-sm border-0 border-b rounded-none border-black outline-none">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="undisclosed">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <button className="w-max border-2 border-black px-4 py-1 text-sm rounded-full flex items-center gap-1">
            <BsShieldCheck /> Privacy settings
          </button>
        </div>
        <div className="border-t p-2 flex justify-end">
          <button className="bg-black rounded-full text-white py-1 px-4">
            Update
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
