import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div
      className="h-[100dvh] grid place-items-center"
      style={{
        background:
          "linear-gradient(rgba(0 0 0/0.6),rgba(0 0 0/0.6)),url('/profile.avif')",
      }}
    >
      <div className="bg-white px-6 py-8 rounded-md w-[400px]">
        <div className="text-2xl font-bold">Welcome to HilalLink!</div>
        <div className="mt-3">
          <label htmlFor="" className="font-medium text-sm">
            Email or Phone number
          </label>
          <input
            type="text"
            placeholder="Your email or phone number here"
            className="w-full border p-2 rounded-md mb-4"
          />

          <label htmlFor="" className="font-medium text-sm ">
            Password
          </label>
          <input
            type="text"
            placeholder="Your password here"
            className="w-full border p-2 rounded-md"
          />
          <div className="text-sm mt-1 font-medium flex justify-end">
            Forgot Password?
          </div>

          <button className="w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm">
            Sign in
          </button>
          <button className="w-full bg-transparent border border-gray-400 rounded-md py-2 mt-4 text-sm flex items-center justify-center gap-2">
            <FcGoogle size={18} /> Continue with google
          </button>
          <Link href="/signup">
            <div className="justify-center items-center mt-4 flex gap-2 text-sm">
              Create a new HilalLink Account <BsArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
