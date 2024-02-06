import Link from "next/link";
import React from "react";
import { BsEnvelope, BsEye, BsGoogle, BsPersonCircle, BsShieldCheck } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <div className="small flex flex-col justify-center h-full">
      <div className="text-center text-2xl font-bold">Create a new account</div>
      <section className="grid gap-y-4 mt-10">
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3">
          <BsPersonCircle className="text-3xl text-gray-500" />
          <input
            type="text"
            className="w-full py-3 focus:outline-none"
            placeholder="Full name"
          />
        </div>
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3">
          <BsEnvelope className="text-3xl text-gray-500" />
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
            placeholder="Create a new password"
          />
          <BsEye className="text-lg" />
        </div>
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3">
          <BsShieldCheck className="text-3xl text-gray-500" />
          <input
            type="text"
            className="w-full py-3 focus:outline-none"
            placeholder="Confirm Password"
          />
          <BsEye className="text-lg" />
        </div>
        <button className="bg-black text-white py-3 rounded-full">Login</button>
        <div className="text-center font-bold">Or</div>
        <div className="flex items-center bg-white gap-3 rounded-full overflow-hidden px-3 py-3 justify-center">
          <BsGoogle className="text-xl" />
          Continue with Google
        </div>
        <Link href="/login">
          <div className="flex items-center font-bold gap-3 rounded-full overflow-hidden px-3 py-3 justify-center">
            Login to existing account
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Signup;
