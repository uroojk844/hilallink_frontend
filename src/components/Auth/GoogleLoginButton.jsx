import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideAuth } from "@/redux/togglesSlice";

const GoogleLoginButton = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  function googelLogin() {
    signInWithPopup(auth, provider)
      .then((credentials) => {
        dispatch(hideAuth());
        localStorage.setItem("user",credentials.user.uid);
        toast.success("Logged in successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div
      onClick={googelLogin}
      className="hover:bg-gray-100 cursor-pointer flex items-center gap-3 border justify-center py-2 rounded-md mt-2"
    >
      <FcGoogle className="text-2xl" />
      <div className="text-sm">Continue with google</div>
    </div>
  );
};

export default GoogleLoginButton;
