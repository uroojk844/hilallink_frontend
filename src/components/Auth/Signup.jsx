import { hideAuth } from "@/redux/togglesSlice";
import { BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import GoogleLoginButton from "./GoogleLoginButton";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
import VerificationSent from "./VerificationSent";
import { generateFromEmail } from "unique-username-generator";
import { addUser } from "@/utils/db_func";

const Signup = ({ controller }) => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const actionCodeSettings = {
    url: "http://localhost:3000/",
    handleCodeInApp: true,
  };
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  const signup = (data) => {
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((credential) => {
        setSent(true);
        const user = credential.user;
        data.uid = user.uid;
        data.username = generateFromEmail(data.email, 4);
        data.dob = "";
        data.phone = user.phoneNumber;
        data.gender = "";
        data.category = "";
        data.dateJoined = formattedToday;
        data.website = "";
        data.location = "";
        data.bio = "";
        data.profilePhoto = user.photoURL;
        data.coverPhoto = "";
        data.premium = false;
        data.accountType = "Public";

        addUser(data);

        sendEmailVerification(user).then(() => {
          console.log("sent");
          setSent(true);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err.code == "auth/email-already-in-use") {
          toast.error("This email is already in use");
        }
        setLoading(false);
        console.log(err.code);
      });
  };
  return (
    <div className="w-[min(360px,96%)] relative bg-white px-4 py-10 rounded-md">
      {sent ? (
        <VerificationSent />
      ) : (
        <div>
          <BsX
            className="absolute text-2xl top-3 right-1 cursor-pointer"
            onClick={() => dispatch(hideAuth())}
          />
          <div className="text-2xl font-bold">Create account</div>
          <form action="">
            <div className="mt-4 grid gap-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                {...register("name")}
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Create password"
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                {...register("password")}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-md py-2 px-4"
              />
              {loading ? (
                <button
                  disabled
                  className="flex justify-center w-full bg-black text-white py-2 rounded-md"
                >
                  <ThreeDots height={24} width={24} color="white" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit(signup)}
                  className="w-full bg-black text-white py-2 rounded-md"
                >
                  Signup
                </button>
              )}
            </div>
          </form>
          <div className="text-center mt-1">or</div>
          <GoogleLoginButton />
          <div
            className="text-center mt-5 text-sm cursor-pointer"
            onClick={() => controller("login")}
          >
            I have an account
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
