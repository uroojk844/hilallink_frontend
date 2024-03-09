"use client";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsArrowLeft } from "react-icons/bs";
import { generateFromEmail } from "unique-username-generator";
import bcrypt from "bcryptjs";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const Signup = () => {
  const [btnWidth, setBtnWidth] = useState(200);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const form = document.querySelector("#form");
    setBtnWidth(getComputedStyle(form).width.split("px")[0] - 48);
  }, []);

  const { watch, handleSubmit, register } = useForm();

  async function getFormData(data) {
    setIsLoading(true);
    data.username = generateFromEmail(data.email, 4);
    data.password = await bcrypt.hash(data.password, 10);
    axios
      .post("/api/user", data)
      .then((response) => {
        console.log(response.data);
        axios
          .post("/api/sendotponmail", {
            email: data.email,
            name: data.name,
          })
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  }

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
        <div className="text-2xl font-bold">Enter OTP</div>
        <div className="mt-3">
          <div className="flex justify-between gap-8">
            <input
              type="tel"
              {...register("digit1", { required: true })}
              onKeyUp={(e) =>
                e.target.value.length > 1 && e.target.nextSibling.focus()
              }
              autoFocus={true}
              placeholder="0"
              maxLength={1}
              minLength={1}
              className="w-full text-center border p-2 rounded-md mb-4 text-xl"
            />
            <input
              type="tel"
              {...register("digit2", { required: true })}
              placeholder="0"
              maxLength={1}
              minLength={1}
              className="w-full text-center border p-2 rounded-md mb-4 text-xl"
            />
            <input
              type="tel"
              {...register("digit3", { required: true })}
              placeholder="0"
              maxLength={1}
              minLength={1}
              className="w-full text-center border p-2 rounded-md mb-4 text-xl"
            />
            <input
              type="tel"
              {...register("digit4", { required: true })}
              placeholder="0"
              maxLength={1}
              minLength={1}
              className="w-full text-center border p-2 rounded-md mb-4 text-xl"
            />
          </div>

          <button
            className="w-full flex justify-center bg-black text-white rounded-md py-2.5 mt-3 text-sm disabled:cursor-not-allowed disabled:opacity-80"
            disabled={!matching}
          >
            {!isLoading ? (
              "Verify"
            ) : (
              <TailSpin height={20} width={20} color="white" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
