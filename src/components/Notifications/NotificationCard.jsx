const NotificationCard = ({ index }) => {
  return (
    <div className="bg-white dark:bg-[hsl(200,6%,10%)] flex items-start gap-3">
      <img
        src={`https://picsum.photos/400?${index}`}
        className="h-10 w-10 object-contain rounded-full"
        alt=""
      />
      <div>
        <div className="text-sm">
          <span className="font-medium">@BelalNaim9</span> liked your post
        </div>
        <div className="text-xs mt-1 text-gray-500 dark:text-[#afa99e]">
          12 minutes ago
        </div>
        <div className="flex rounded-sm overflow-hidden mt-2">
          <img className="w-14" src="https://picsum.photos/400" alt="" />
          <div className="text-xs text-gray-600 p-2 bg-gray-100 dark:bg-black/95">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eos
            voluptate asperiores suscipit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
