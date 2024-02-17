import { hideAuth } from "@/redux/togglesSlice";
import React from "react";
import { useDispatch } from "react-redux";

const VerificationSent = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid place-items-center">
      <img src="/sent.svg" alt="" className="w-52" />
      <div className="text-center font-medium text-sm">
        We have sent you an email to activate your account, Please check your
        inbox
      </div>
      <button
        onClick={() => dispatch(hideAuth())}
        className="bg-black text-white w-max px-5 py-2 rounded-full text-xs mt-5"
      >
        Close
      </button>
    </div>
  );
};

export default VerificationSent;
