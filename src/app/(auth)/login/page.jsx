import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div
      className="bg-cover bg-center h-[100dvh] grid place-items-center "
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="grid grid-cols-2 bg-white rounded-md overflow-hidden">
        <div className="grid place-items-center">
          <div>
            <div className="font-bold text-3xl">Welcome Back!</div>
            <div className="text-gray-600">
              Please login or signup to continue to HilalLink
            </div>

            <div className="mt-5">
              <label htmlFor="" className="font-medium">
                Email
              </label>
              <input
                type="text"
                className="mt-1 w-full bg-transparent border p-2 rounded-md border-gray-300 "
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="" className="font-medium">
                Password
              </label>
              <input
                type="text"
                className="mt-1 w-full bg-transparent border p-2 rounded-md border-gray-300 "
                placeholder="Enter Your Password"
              />
            </div>

            <div className="flex justify-between text-sm mt-2 text-gray-500">
              <div className="flex items-center gap-2">
                <input type="checkbox" name="" id="" /> Remember me
              </div>
              <div>Forgot password?</div>
            </div>

            <button className="w-full bg-black text-white font-medium py-2 rounded-md mt-8">
              Sign in
            </button>
            <button className="flex gap-3 justify-center items-center w-full border border-gray-400 bg-transparent font-medium py-2 rounded-md mt-2">
              <FcGoogle size={22} /> Continue with Google
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://picsum.photos/800"
            className="w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
