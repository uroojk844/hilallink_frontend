const ChangePassword = () => {
  return (
    <div className="small bg-white sm:rounded-md">
      <div className="font-bold border-b text-lg p-3">Change password</div>
      <div className="p-3">
        <div className="text-sm">
        </div>
        <div className="mt-1">
          <label htmlFor="" className="text-xs mt-4 text-gray-500">
           Old Password
          </label>
          <input type="text" className="border-b border-black w-full" />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-xs mt-4 text-gray-500">
            New Password
          </label>
          <input type="text" className="border-b border-black w-full" />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-xs mt-4 text-gray-500">
            Confirm New Password
          </label>
          <input type="text" className="border-b border-black w-full" />
        </div>
        <div className="flex justify-end">
          <button className="bg-black text-white text-sm py-1 px-3 rounded-full mt-5">
            Update password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
