"use client";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Toaster, toast } from "sonner";

const Signup = () => {
  const [btnWidth, setBtnWidth] = useState(200);
  const [isEmail, setIsEmail] = useState(true);

  useEffect(() => {
    const form = document.querySelector("#form");
    setBtnWidth(getComputedStyle(form).width.split("px")[0] - 48);
  }, []);
  const { handleSubmit, register } = useForm();
  const router = useRouter()

  function phoneSignup(data) {
    data.username = data.phone;
    fetch("/api/user", {
      method: "POST",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-center",
          });
        } else {
          toast.success("Account created", {
            position: "top-center",
          });
          router.push("/auth/login")
        }
      });
  }
  return (
    <>
      <Toaster richColors />
      <div
        className="h-[100dvh] grid place-items-center"
        style={{
          background:
            "linear-gradient(rgba(0 0 0/0.6),rgba(0 0 0/0.6)),url('/profile.avif')",
        }}
      >
        <div
          id="form"
          className="bg-white px-6 py-8 rounded-md w-[min(400px,96%)]"
        >
          <div className="text-2xl font-bold">Create a new account</div>
          <form onSubmit={handleSubmit(phoneSignup)}>
            <div className="mt-3">
              <label htmlFor="" className="font-medium text-sm">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name here"
                className="w-full border p-2 rounded-md mb-3 text-sm"
                {...register("name")}
              />
              <label htmlFor="" className="font-medium text-sm">
                Phone
              </label>
              <input
                type="text"
                placeholder="Your phone number here"
                className="w-full border p-2 rounded-md text-sm mb-3"
                {...register("phone")}
              />

              <label htmlFor="" className="font-medium text-sm ">
                Create a password
              </label>
              <input
                type="text"
                placeholder="Create your password"
                className="w-full border p-2 rounded-md mb-4 text-sm"
                {...register("password")}
              />
              <label htmlFor="" className="font-medium text-sm ">
                Confirm your paassword
              </label>
              <input
                type="text"
                placeholder="Re-enter your password"
                className="w-full border p-2 rounded-md text-sm"
              />

              <button className="w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm">
                Sign up
              </button>
              <div className="flex items-center gap-2 my-2">
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="leading-4 text-xs">OR</div>
                <div className="h-[1px] w-full bg-gray-200"></div>
              </div>
              <Link href="/auth/login">
                <div className="justify-center items-center mt-4 flex gap-2 text-sm">
                  <BsArrowLeft /> Login to an existing account
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
