import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div
      className="h-[100dvh] grid place-items-center"
      style={{
        background:
          "linear-gradient(rgba(0 0 0/0.6),rgba(0 0 0/0.6)),url('/profile.avif')",
      }}
    >
      <div className="bg-white px-6 py-8 rounded-md w-[400px]">
        <div className="text-2xl font-bold">Create a new account</div>
        <div className="mt-3">
          <label htmlFor="" className="font-medium text-sm">
            Full name
          </label>
          <input
            type="text"
            placeholder="Your name here"
            className="w-full border p-2 rounded-md mb-3"
          />
          <label htmlFor="" className="font-medium text-sm">
            Email address
          </label>
          <input
            type="text"
            placeholder="Your email address here"
            className="w-full border p-2 rounded-md"
          />
          <div className="text-sm font-medium flex justify-end mt-1">
            Use phone number instead
          </div>

          <label htmlFor="" className="font-medium text-sm ">
            Create a password
          </label>
          <input
            type="text"
            placeholder="Create your password"
            className="w-full border p-2 rounded-md mb-4"
          />
          <label htmlFor="" className="font-medium text-sm ">
            Confirm your paassword
          </label>
          <input
            type="text"
            placeholder="Re-enter your password"
            className="w-full border p-2 rounded-md"
          />

          <button className="w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm">
            Sign up
          </button>
          <button className="w-full bg-transparent border border-gray-400 rounded-md py-2 mt-4 text-sm flex items-center justify-center gap-2">
            <FcGoogle size={18} /> Continue with google
          </button>
          <Link href="/login">
            <div className="justify-center items-center mt-4 flex gap-2 text-sm">
              <BsArrowLeft /> Login to an existing account
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
