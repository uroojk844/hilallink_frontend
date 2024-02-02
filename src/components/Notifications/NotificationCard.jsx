
const NotificationCard = ({index}) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={`https://picsum.photos/400?${index}`}
        className="h-10 w-10 object-contain rounded-full"
        alt=""
      />
      <div>
        <div className="text-sm">
          <span className="font-medium">@BelalNaim9</span> liked your post
        </div>
        <div className="text-xs mt-1 text-gray-500">12 minutes ago</div>
      </div>
    </div>
  );
}

export default NotificationCard