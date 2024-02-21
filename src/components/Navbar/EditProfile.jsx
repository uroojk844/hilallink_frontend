"use client";
import "animate.css";
import { BsCamera, BsShieldCheck, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { hideEdit } from "@/redux/togglesSlice";
import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "@/utils/firebase";
import { fetchUsers } from "@/redux/userSlice";
import { useEffect } from "react";

const EditProfile = () => {
  const userData = useSelector((state) => state.userSlice.user);
  const { register, handleSubmit,setValue } = useForm();
  const dispatch = useDispatch(); 
  useEffect(() => {
    setValue("name",userData.name)
    setValue("username",userData.username)
    setValue("bio",userData.bio)
    setValue("location",userData.location)
    setValue("category",userData.category)
    setValue("website",userData.website)
  },[])

  const updateUser = (d) => {
    const userRef = doc(database, "users", localStorage.getItem("user"));
    updateDoc(userRef, {
      name: d.name,
      username: d.username,
      bio: d.bio,
      category: d.category,
      location: d.location,
      dob: d.dob,
      gender: d.gender,
      website: d.website
    }).then(() => {
      dispatch(hideEdit());
      dispatch(fetchUsers());
    });
  };

  return (
    <section className="fixed inset-0 glass z-50 grid place-items-center">
      <div className="animate__animated animate__bounceIn w-[min(520px,96%)] bg-white rounded-md overflow-hidden">
        <div className="p-3 text-lg font-bold flex items-center gap-3">
          <BsX
            className="text-xl cursor-pointer"
            onClick={() => dispatch(hideEdit())}
          />{" "}
          Edit Profile
        </div>
        <div className="relative">
          <BsCamera className="absolute cursor-pointer z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
          <img
            src={userData.coverPhoto || "/bg.png"}
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
                src={userData.profilePhoto || "https://picsum.photos/400?1"}
                className="brightness-50 h-28 w-28 rounded-full border-4 border-white"
                alt=""
              />
            </div>
          </div>
          <form>
            <div className="mt-8 h-[280px] overflow-scroll">
              <div className="mb-4">
                <div className="text-xs text-gray-500">Full Name</div>
                <input
                  type="text"
                  {...register("name")}
                  className="text-sm border-b w-full border-black py-2"
                />
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-500">Username</div>
                <input
                  type="text"
                  {...register("username")}
                  className="text-sm border-b w-full border-black py-2"
                />
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-500">Bio</div>
                <textarea
                  type="text"
                  {...register("bio")}
                  className="text-sm border-b w-full border-black py-2"
                ></textarea>
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-500">Category</div>
                <input
                  type="text"
                  className="text-sm border-b w-full border-black py-2"
                  {...register("category")}
                />
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-500">Website</div>
                <input
                  type="text"
                  className="text-sm border-b w-full border-black py-2"
                  {...register("website")}
                />
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-500">Location</div>
                <input
                  type="text"
                  className="text-sm border-b w-full border-black py-2"
                  {...register("location")}
                />
              </div>
              <div className="mb-4">
                <div className="text-xs text-gray-500">Birth Date</div>
                <input
                  type="date"
                  className="text-sm border-b w-full border-black py-2"
                  {...register("dob")}
                />
              </div>
              <div className="text-xs text-gray-500">Gender</div>
              <div className="mb-4">
                <select
                  {...register("gender")}
                  className="py-2 w-full border-b border-black"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="undisclosed">Prefer not to say</option>
                </select>
              </div>
            </div>
          </form>
          <button className="w-max border-2 border-black px-4 py-1 text-sm rounded-full flex items-center gap-1">
            <BsShieldCheck /> Privacy settings
          </button>
        </div>
        <div className="border-t p-2 flex justify-end">
          <button
            onClick={handleSubmit(updateUser)}
            className="bg-black rounded-full text-white py-1 px-4"
          >
            Update
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditProfile;
