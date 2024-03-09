"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TailSpin } from "react-loader-spinner";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.querySelectorAll("form input").forEach((elem, index) => {
      elem.addEventListener("keyup", (e) => {
        if (e.key == "Backspace" && index > 0) {
          e.target.value.trim().length == 0 && e.target.previousSibling.focus();
        } else if (index < 3) {
          e.target.value.trim().length > 0 && e.target.nextSibling.focus();
        }
      });
    });
  }, []);

  const { handleSubmit, register } = useForm();

  async function verifyOTP(data) {
    const otp = Object.values(data).join("");
    alert(otp);
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
        onSubmit={handleSubmit(verifyOTP)}
        id="form"
        className="bg-white px-6 py-8 rounded-md w-[min(400px,96%)]"
      >
        <div className="text-2xl font-bold">Enter OTP</div>

        <div className="flex justify-between gap-8 mt-6 mb-8">
          <input
            type="text"
            {...register("digit1", { required: true })}
            autoFocus={true}
            placeholder="0"
            maxLength={1}
            pattern="[0-9]"
            min={0}
            max={9}
            required={true}
            className="w-full hide-spin text-center border p-2 rounded-md text-xl"
          />
          <input
            type="text"
            {...register("digit2", { required: true })}
            placeholder="0"
            maxLength={1}
            pattern="[0-9]"
            min={0}
            mix={9}
            required={true}
            className="w-full text-center border p-2 rounded-md text-xl"
          />
          <input
            type="text"
            {...register("digit3", { required: true })}
            placeholder="0"
            maxLength={1}
            pattern="[0-9]"
            min={0}
            max={9}
            required={true}
            className="w-full hide-spin text-center border p-2 rounded-md text-xl"
          />
          <input
            type="text"
            {...register("digit4", { required: true })}
            placeholder="0"
            maxLength={1}
            pattern="[0-9]"
            min={0}
            max={9}
            required={true}
            className="w-full hide-spin text-center border p-2 rounded-md text-xl"
          />
        </div>

        <button className="w-full flex justify-center bg-black text-white rounded-md py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-80">
          {!isLoading ? (
            "Verify"
          ) : (
            <TailSpin height={20} width={20} color="white" />
          )}
        </button>
      </form>
    </div>
  );
};

export default Signup;
