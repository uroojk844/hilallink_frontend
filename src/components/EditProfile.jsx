"use client";
import "animate.css";
import { BsCamera, BsShieldCheck, BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { hideEdit } from "@/redux/togglesSlice";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import categories from "@/utils/userCategories";
import { Toaster, toast } from "sonner";
import { fetchUsers } from "@/redux/userSlice";
const EditProfile = () => {
  const userData = useSelector((state) => state.userSlice.user);
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(userData.profile_url);
  const [coverImage, setCoverImage] = useState(userData.cover_url);
  const [newProfilePhoto, SetNewProfilePhoto] = useState("");
  const [newCoverPhoto, SetNewCoverPhoto] = useState("");

  const handleProfileImage = (e) => {
    const image = e.target.files[0];
    const uri = URL.createObjectURL(image);
    SetNewProfilePhoto(e.target.files[0]);
    setProfileImage(uri);
  };

  const handleCoverImage = (e) => {
    const image = e.target.files[0];
    const uri = URL.createObjectURL(image);
    SetNewCoverPhoto(e.target.files[0]);
    setCoverImage(uri);
  };

  const uploadProfileImage = async () => {
    if (newProfilePhoto == "") return userData.profile_url;
    else {
      const data = new FormData();
      data.append("file", newProfilePhoto);
      data.append("upload_preset", "hilal_link");
      data.append("cloud_name", "myimagestorage");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/myimagestorage/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await res.json();
      return resData.url;
    }
  };

  const uploadCoverImage = async () => {
    if (newCoverPhoto == "") return userData.cover_url;
    else {
      const data = new FormData();
      data.append("file", newCoverPhoto);
      data.append("upload_preset", "hilal_link");
      data.append("cloud_name", "myimagestorage");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/myimagestorage/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const resData = await res.json();
      return resData.url;
    }
  };

  useEffect(() => {
    setValue("name", userData.name);
    setValue("username", userData.username);
    setValue("bio", userData.bio);
    setValue("location", userData.location);
    setValue("category", userData.category);
    setValue("website", userData.website);
  }, []);

  const updateUser = async (d) => {
    setLoading(true);
    d.user = localStorage.getItem("user");
    d.profile_url = await uploadProfileImage();
    d.cover_url = await uploadCoverImage();
    const res = await fetch("/api/edit-profile", {
      method: "POST",
      cache: "no-store",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(d),
    });
    const data = await res.json();
    if (data.success) {
      toast.success("Profile updated", {
        position: "top-center",
      });
      dispatch(fetchUsers());
      dispatch(hideEdit());
      setLoading(false);
    } else {
      toast.error(data.error, {
        position: "top-center",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster richColors />
      <form>
        <section className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="animate__animated animate__bounceIn w-[min(520px,96%)] bg-white dark:bg-[hsl(200,6%,10%)] rounded-md overflow-hidden">
            <div className="p-3 text-lg font-bold flex items-center gap-3">
              <BsX
                className="text-xl cursor-pointer"
                onClick={() => dispatch(hideEdit())}
              />{" "}
              Edit Profile
            </div>
            <label htmlFor="coverPhoto">
              <div className="relative">
                <BsCamera className="absolute cursor-pointer z-40 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-white text-3xl" />
                <img
                  src={coverImage || "/bg.png"}
                  className="w-full h-[140px] object-cover brightness-50 "
                  alt=""
                />
              </div>
            </label>
            <div className="p-3 pt-4 relative">
              <label htmlFor="profilePhoto">
                <div className="absolute -top-20 left-4">
                  <div className="relative">
                    <div className="absolute grid place-items-center h-full w-full rounded-full">
                      <BsCamera className="text-white  z-40 text-2xl cursor-pointer" />
                    </div>
                    <img
                      src={profileImage || "https://picsum.photos/400?1"}
                      className="brightness-50 h-28 w-28 rounded-full border-4 border-white"
                      alt=""
                    />
                  </div>
                </div>
              </label>
              {/* input for profile photo */}
              <input
                type="file"
                onChange={(e) => handleProfileImage(e)}
                id="profilePhoto"
                hidden
              />

              {/* input for cover photo */}
              <input
                type="file"
                onChange={(e) => handleCoverImage(e)}
                id="coverPhoto"
                hidden
              />

              <div className="mt-8 h-[280px] overflow-y-scroll scrollbar-v">
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Full Name
                  </div>
                  <input
                    type="text"
                    {...register("name")}
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                  />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Username
                  </div>
                  <input
                    type="text"
                    {...register("username")}
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                  />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Bio
                  </div>
                  <textarea
                    type="text"
                    {...register("bio")}
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Category
                  </div>
                  <select
                    defaultValue={userData.category}
                    {...register("category")}
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                  >
                    {categories.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Website
                  </div>
                  <input
                    type="text"
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                    {...register("website")}
                  />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Location
                  </div>
                  <input
                    type="text"
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                    {...register("location")}
                  />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Birth Date
                  </div>
                  <input
                    type="date"
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                    {...register("dob")}
                  />
                </div>
                <div className="mb-4">
                  <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                    Account Privacy
                  </div>
                  <select
                    defaultValue={userData.accountType}
                    {...register("privacy")}
                    className="text-sm border-b w-full border-black py-2 dark:bg-[hsl(200,6%,10%)]"
                  >
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
                <div className="text-xs text-gray-500 dark:text-[#afa99e]">
                  Gender
                </div>
                <div className="mb-4">
                  <select
                    {...register("gender")}
                    className="py-2 w-full border-b border-black dark:bg-[hsl(200,6%,10%)]"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="undisclosed">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <button className="w-max border-2 border-black px-4 py-1 text-sm rounded-full flex items-center gap-1">
                <BsShieldCheck /> Privacy settings
              </button>
            </div>
            <div className="border-t p-2 flex justify-end">
              {loading ? (
                <button
                  disabled
                  className="bg-black rounded-full text-white py-1 px-4"
                >
                  <ThreeDots color="white" width={24} height={24} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit(updateUser)}
                  className="bg-black rounded-full text-white py-1 px-4"
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default EditProfile;
