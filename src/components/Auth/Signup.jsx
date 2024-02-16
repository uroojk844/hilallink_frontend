import { hideAuth } from "@/redux/togglesSlice";
import { BsX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

const Signup = ({ controller }) => {
    const dispatch = useDispatch()
  return (
    <div className="w-[min(360px,96%)] relative bg-white px-4 py-10 rounded-md">
      <BsX className="absolute text-2xl top-3 right-1 cursor-pointer" onClick={()=>dispatch(hideAuth())} />
      <div className="text-2xl font-bold">Create account</div>
      <div className="mt-4 grid gap-y-4">
        <input
          type="text"
          placeholder="Full name"
          className="w-full border border-gray-300 rounded-md py-2 px-4"
        />
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 rounded-md py-2 px-4"
        />
        <input
          type="password"
          placeholder="Create password"
          className="w-full border border-gray-300 rounded-md py-2 px-4"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full border border-gray-300 rounded-md py-2 px-4"
        />
        <button className="w-full bg-black text-white py-2 rounded-md">
          Signup
        </button>
      </div>
      <div className="text-center mt-1">or</div>
      <div className="flex items-center gap-3 border justify-center py-2 rounded-md mt-2">
        <FcGoogle className="text-2xl" />
        <div className="text-sm">Continue with google</div>
      </div>
      <div className="text-center mt-5 text-sm cursor-pointer" onClick={()=>controller(true)}>I have an account</div>
    </div>
  );
}

export default Signup