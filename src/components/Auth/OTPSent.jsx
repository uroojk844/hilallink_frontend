import { hideAuth } from "@/redux/togglesSlice";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";

const OTPSent = () => {
  const dispatch = useDispatch()
  return (
    <div className="grid place-items-center">
      <img src="/forgot.png" alt="" className="w-52" />
      <div className="text-center font-medium text-sm">
        We have sent you an email with the link to reset your password
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(hideAuth())}
          className="flex items-center gap-2 bg-black text-white w-max px-5 py-2 rounded-full text-xs mt-5"
        >
          <BsArrowLeft />
          Go back
        </button>
      </div>
    </div>
  );
}

export default OTPSent