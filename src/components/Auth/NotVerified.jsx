import { BsArrowLeft, BsEnvelopePaper } from "react-icons/bs";

const NotVerified = ({ controller }) => {
  return (
    <div className="grid place-items-center">
      <img src="/sent.svg" alt="" className="w-52" />
      <div className="text-center font-medium text-sm">
        Your email is not verfied, Please check your inbox and verify your email
        to continue using HilalLink
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => controller(false)}
          className="flex items-center gap-2 bg-black text-white w-max px-5 py-2 rounded-full text-xs mt-5"
        >
          <BsArrowLeft />
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotVerified;
