"use client";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { generateUsername } from "unique-username-generator";
import bcrypt from "bcryptjs";
import { TailSpin } from "react-loader-spinner";
import { NextResponse } from "next/server";

const Signup = () => {
  const [btnWidth, setBtnWidth] = useState(200);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const form = document.querySelector("#form");
    setBtnWidth(getComputedStyle(form).width.split("px")[0] - 48);
  }, []);

  const { watch, handleSubmit, register } = useForm();

  async function getFormData(data) {}

  const [matching, setMatching] = useState(false);

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
          <label className="font-medium text-sm grid mb-3 ">
            Full name
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your name here"
              className="w-full border p-2 rounded-md text-sm"
            />
          </label>

          <label className="font-medium text-sm grid mb-3 ">
            Phone number
            <input
              type="tel"
              {...register("phone", { required: true })}
              placeholder="Your phone number here"
              className="w-full border p-2 rounded-md text-sm"
            />
          </label>

          <label className="font-medium text-sm grid mb-3 ">
            Create a password
            <input
              type="password"
              onKeyUp={() =>
                setMatching(watch("password") == watch("confirmPassword"))
              }
              {...register("password", { required: true })}
              placeholder="Create your password"
              className="w-full border p-2 rounded-md text-sm"
            />
          </label>
          <label className="font-medium text-sm ">
            Confirm your paassword
            <input
              {...register("confirmPassword", { required: true })}
              onKeyUp={() =>
                setMatching(watch("password") == watch("confirmPassword"))
              }
              type="password"
              placeholder="Re-enter your password"
              className="w-full border p-2 rounded-md text-sm"
            />
          </label>

          <button
            className="w-full flex justify-center bg-black text-white rounded-md py-2.5 mt-4 text-sm disabled:cursor-not-allowed disabled:opacity-80"
            disabled={!matching}
          >
            {!isLoading ? (
              "Sign up"
            ) : (
              <TailSpin height={20} width={20} color="white" />
            )}
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
