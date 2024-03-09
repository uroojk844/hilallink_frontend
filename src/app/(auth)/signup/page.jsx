"use client";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { generateFromEmail } from "unique-username-generator";
import bcrypt from "bcryptjs";
import axios from "axios";

const Signup = () => {
  const [btnWidth, setBtnWidth] = useState(200);
  const [isEmail, setIsEmail] = useState(true);

  useEffect(() => {
    const btn = document.querySelector(".custom_btn");
    const form = document.querySelector("#form");
    setBtnWidth(getComputedStyle(form).width.split("px")[0] - 48);
  }, []);

  const { handleSubmit, register } = useForm();

  async function getFormData(data) {
    data.username = generateFromEmail(data.email, 4);
    data.password = await bcrypt.hash(data.password, 10);
    axios
      .post("/api/user", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      className="h-[100dvh] grid place-items-center"
      style={{
        background:
          "linear-gradient(rgba(0 0 0/0.6),rgba(0 0 0/0.6)),url('/profile.avif')",
      }}
    >
      <form
        onSubmit={handleSubmit(getFormData)}
        id="form"
        className="bg-white px-6 py-8 rounded-md w-[min(400px,96%)]"
      >
        <div className="text-2xl font-bold">Create a new account</div>
        <div className="mt-3">
          <label className="font-medium text-sm">
            Full name
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your name here"
              className="w-full border p-2 rounded-md mb-3 text-sm"
            />
          </label>
          {isEmail ? (
            <label className="font-medium text-sm">
              Email address
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Your email address here"
                className="w-full border p-2 rounded-md text-sm"
              />
            </label>
          ) : (
            <label className="font-medium text-sm">
              Phone number
              <input
                type="tel"
                {...register("phone", { required: true })}
                placeholder="Your phone number here"
                className="w-full border p-2 rounded-md text-sm"
              />
            </label>
          )}
          <div
            onClick={() => setIsEmail((cur) => !cur)}
            className="text-xs text-gray-400 flex justify-end mt-1 hover:text-gray-500 duration-150 cursor-pointer"
          >
            Use {!isEmail ? "email address" : "phone number"} instead
          </div>

          <label className="font-medium text-sm ">
            Create a password
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Create your password"
              className="w-full border p-2 rounded-md mb-4 text-sm"
            />
          </label>
          <label className="font-medium text-sm ">
            Confirm your paassword
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full border p-2 rounded-md text-sm"
            />
          </label>

          <button className="w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm">
            Sign up
          </button>
          <div className="flex items-center gap-2 my-2">
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="leading-4 text-xs">OR</div>
            <div className="h-[1px] w-full bg-gray-200"></div>
          </div>

          <div className="flex mt-2 justify-center">
            <GoogleLogin
              width={btnWidth}
              theme="filled_black"
              text={"continue_with"}
              onSuccess={(res) => {
                // googleLogin(res);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <Link href="/login">
            <div className="justify-center items-center mt-4 flex gap-2 text-sm">
              <BsArrowLeft /> Login to an existing account
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
