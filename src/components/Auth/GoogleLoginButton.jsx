import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideAuth } from "@/redux/togglesSlice";
import { generateFromEmail } from "unique-username-generator";
import { fetchUsers } from "@/redux/userSlice";
import { addUser } from "@/utils/db_func";

const GoogleLoginButton = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  async function googelLogin() {
    signInWithPopup(auth, provider)
      .then((credentials) => {
        const user = credentials.user;
        const data = {
          name: user.displayName,
          email: user.email,
          username: generateFromEmail(user.email,4),
          uid: user.uid,
          profile_url: user.photoURL,
        };
        addUser(data).then((added) => {
          localStorage.setItem("user", user.uid);
          toast.success("Logged in successfully!");
          dispatch(hideAuth());
          dispatch(fetchUsers());
        });
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
