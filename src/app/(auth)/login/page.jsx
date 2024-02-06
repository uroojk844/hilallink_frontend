import Link from "next/link";
import React from "react";
import { BsEye, BsGoogle, BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <div className="small flex flex-col justify-center h-full">
      <div className="flex text-2xl font-bold items-center justify-center gap-4">
        {" "}
        <img src="logo.png" className="h-8 w-8" alt="logo image" /> HilalLink
      </div>
      <section className="grid gap-y-4 mt-10">
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3">
          <BsPersonCircle className="text-3xl text-gray-500" />
          <input
            type="text"
            className="w-full py-3 focus:outline-none"
            placeholder="Email address"
          />
        </div>
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3">
          <RiLockPasswordLine className="text-3xl text-gray-500" />
          <input
            type="text"
            className="w-full py-3 focus:outline-none"
            placeholder="Password"
          />
          <BsEye className="text-lg" />
        </div>
        <div>Forgot password</div>
        <button className="bg-black text-white py-3 rounded-full">Login</button>
        <div className="text-center font-bold">Or</div>
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3 py-3 justify-center">
          <BsGoogle className="text-xl" />
          Continue with Google
        </div>
        <Link href="/signup">
          <div className="flex items-center font-bold gap-3 rounded-full overflow-hidden px-3 py-3 justify-center">
            Create new account
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Login;
