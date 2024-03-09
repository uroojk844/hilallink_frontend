"use client";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsShieldCheck } from "react-icons/bs";
import { Toaster, toast } from "sonner";
import { TailSpin } from "react-loader-spinner";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  function googleLogin(data) {
    console.log(jwtDecode(data.credential));
    router.push("/");
  }

  const { register, handleSubmit } = useForm();

  const [btnWidth, setBtnWidth] = useState(200);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const form = document.querySelector("#form");
    setBtnWidth(getComputedStyle(form).width.split("px")[0] - 48);
  }, []);
  const [userNotVerified, setUserNotVerfied] = useState(false);
  function signin(data) {
    setLoading(true);
    fetch(
      "/api/email-auth",
      {
        method: "POST",
        cache:"no-cache",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          phone: data?.phone,
          password: data?.password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-center",
          });
          setLoading(false);
        } else {
          if (!data.verified) {
            setUserNotVerfied(true);
          } else {
            toast.success("Logged in!", {
              position: "top-center",
            });
            router.push("/");
            localStorage.setItem("token", data.token);
          }
        }
      });
  }

  return (
    <>
      <Toaster richColors />
      <div
        className="h-[100vh] grid place-items-center"
        style={{
          background:
            "linear-gradient(rgba(0 0 0/0.6),rgba(0 0 0/0.6)),url('/profile.avif')",
        }}
      >
        <form
          onSubmit={handleSubmit(signin)}
          id="form"
          className="bg-white px-6 py-8 rounded-md w-[min(400px,96%)]"
        >
          {userNotVerified ? (
            <>
              <div className="font-bold text-lg">
                This account is not verified
              </div>
              <div className="text-sm mt-2">
                In case you forgot to verify your account when you created it,
                You can verify it now
              </div>
              <div className="flex justify-center">
                <img src="/forgot.png" className="size-44" alt="" />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer"
                >
                  Verify <BsShieldCheck />
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="text-2xl font-bold">Welcome to HilalLink!</div>
              <div className="mt-3">
                <label htmlFor="" className="font-medium text-sm">
                  Email or Phone number
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  placeholder="Your email or phone number here"
                  className="w-full border p-2 rounded-md mb-4 max-sm:text-sm"
                  required
                />
                <label htmlFor="" className="font-medium text-sm ">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Your password here"
                  className="w-full border p-2 rounded-md max-sm:text-sm"
                  required
                />
                <div className="text-sm mt-1 font-medium flex justify-end">
                  Forgot Password?
                </div>
                {loading ? (
                  <button className="cursor-not-allowed flex justify-center w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm opacity-80">
                    <TailSpin color="white" height={20} width={20} />
                  </button>
                ) : (
                  <button className="w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm">
                    Sign in
                  </button>
                )}

                <div className="flex mt-2 justify-center">
                  <GoogleLogin
                    theme="filled_black"
                    width={btnWidth}
                    text={"continue_with"}
                    onSuccess={(res) => {
                      googleLogin(res);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>

                <Link href="/signup">
                  <div className="justify-center items-center mt-4 flex gap-2 text-sm">
                    Create a new HilalLink Account <BsArrowRight />
                  </div>
                </Link>
              </div>
            </>
          )}

        </form>
      </div>
    </>
  );
};

export default Login;
