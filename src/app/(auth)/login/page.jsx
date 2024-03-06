"use client";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Toaster, toast } from "sonner";
import { TailSpin } from "react-loader-spinner";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  function googleLogin(data) {
    console.log(jwtDecode(data.credential));
    router.push("/");
  }

  const{register,handleSubmit} = useForm()

  const [btnWidth, setBtnWidth] = useState(200);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const btn = document.querySelector(".custom_btn");
    const form = document.querySelector("#form");
    setBtnWidth(getComputedStyle(form).width.split("px")[0] - 48);
  }, []);

  function signin(data) {
    setLoading(true);
    fetch("/api/email-auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email:data?.email,
        password:data?.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-center",
          });
          setLoading(false);
        } else {
          toast.success("Logged in!", {
            position: "top-center",
          });
          router.push("/");
          localStorage.setItem("token", data.token);
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
          <form  onSubmit={handleSubmit(signin)}
            id="form"
            className="bg-white px-6 py-8 rounded-md w-[min(400px,96%)]"
          
          >
            <div className="text-2xl font-bold">Welcome to HilalLink!</div>
            <div className="mt-3">
              <label htmlFor="" className="font-medium text-sm">
                Email or Phone number
              </label>
              <input
                {...register("email")}
                type="email"
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
                <button className="cursor-not-allowed flex justify-center w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm">
                  <TailSpin color="white" height={20} width={20} />
                </button>
              ) : (
                <button
                  className="w-full bg-black text-white rounded-md py-2.5 mt-4 text-sm"
                >
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
          </form>
          
      </div>
    </>
  );
};

export default Login;
