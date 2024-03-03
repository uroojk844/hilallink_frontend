const FollowRequest = ({ index }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <img
          src={`https://picsum.photos/400?${index}`}
          className="h-10 w-10 rounded-full"
          alt=""
        />
        <div>
          <div className="text-sm font-medium">Mohd Belal Naim</div>
          <div className="text-xs text-gray-500 dark:text-[#afa99e] mt-1">
            @BelalNaim9
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded-sm">
          Accept
        </button>
        <button className="border border-gray-500 text-sm px-3 py-1 rounded-sm">
          Reject
        </button>
      </div>
    </div>
  );
};

export default FollowRequest;
