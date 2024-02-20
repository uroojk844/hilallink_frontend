import { BsArrowLeft } from "react-icons/bs";
import OTPSent from "./OTPSent";
import { useState } from "react";
import toast from "react-hot-toast";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ThreeDots } from "react-loader-spinner";

const ForgotPassword = ({ controller }) => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function sendEmail() {
    if (email == "") return toast.error("Please enter an email address");
    setLoading(true)
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSent(true);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
        toast.error("Something went wrong, Please try again later");
      });
  }

  return (
    <div className="w-[min(360px,96%)] relative bg-white px-4 py-10 rounded-md">
      {sent ? (
        <OTPSent/>
      ) : (
        <>
          <div className="text-xl font-bold">Reset your password</div>
          <div className="text-sm mt-2">
            Enter the email associated with your account
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="border rounded w-full mt-4 px-3 py-2"
            placeholder="Email address"
          />
          {loading ? (
            <button
              disabled
              className="flex justify-center w-full bg-black text-white py-2 rounded-md mt-3"
            >
              <ThreeDots height={24} width={24} color="white" />
            </button>
          ) : (
            <button
              onClick={() => sendEmail()}
              className="bg-black text-white w-full text-center py-2 text-sm rounded-md mt-3"
            >
              Continue
            </button>
          )}

          <div
            className="flex items-center justify-center text-sm mt-3 gap-1 cursor-pointer"
            onClick={() => controller("login")}
          >
            <BsArrowLeft /> Go back
          </div>
        </> 
      )}
    </div>
  );
};

export default ForgotPassword;
