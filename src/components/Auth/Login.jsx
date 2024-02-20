import { hideAuth } from "@/redux/togglesSlice";
import { BsArrowLeft, BsEnvelopePaper, BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import GoogleLoginButton from "./GoogleLoginButton";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import NotVerified from "./NotVerified";
import { fetchUsers } from "@/redux/userSlice";

const Login = ({ controller }) => {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [notVerified, setNotVerified] = useState(false);

  const login = (data) => {

    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((credentials) => {
        setLoading(false);
        if (credentials.user?.emailVerified) {
          dispatch(hideAuth());
          console.log(credentials.user);
          toast.success("Logged in successfully!");
          localStorage.setItem("user", credentials.user.uid);
        } else {
          setNotVerified(true);
        }
      })
      .then((loggedIn) => dispatch(fetchUsers()))
      .catch((err) => {
        toast.error("Invalid email or password!");
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="w-[min(360px,96%)] relative bg-white px-4 py-10 rounded-md">
      {notVerified ? (
        <NotVerified controller={setNotVerified} />
      ) : (
        <section>
          <BsX
            className="absolute text-2xl top-3 right-1 cursor-pointer"
            onClick={() => dispatch(hideAuth())}
          />
          <div className="text-2xl font-bold">Hello there!</div>
          <form onSubmit={handleSubmit(login)}>
            <div className="mt-4 grid gap-y-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-2 px-4"
                {...register("password")}
              />
              <div onClick={()=>controller("forgot")} className="flex justify-end text-xs cursor-pointer">
                Forgot your password
              </div>
              {loading ? (
                <button
                  disabled
                  className="flex justify-center w-full bg-black text-white py-2 rounded-md"
                >
                  <ThreeDots height={24} width={24} color="white" />
                </button>
              ) : (
                <button className="w-full bg-black text-white py-2 rounded-md">
                  Login
                </button>
              )}
            </div>
          </form>
          <div className="text-center mt-1">or</div>
          <GoogleLoginButton />
          <div
            className="text-center mt-5 text-sm cursor-pointer"
            onClick={() => controller("signup")}
          >
            Create a new account
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
