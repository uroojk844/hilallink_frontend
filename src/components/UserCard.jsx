import Link from "next/link";
import { useSelector } from "react-redux";

const UserCard = () => {
  const userData = useSelector((state) => state.userSlice.user);
  return (
    <Link href="/my-profile">
      <div className="rounded-sm">
        <div className="flex items-center gap-2">
          <img
            src={userData?.profilePhoto || "/avtar.jpg"}
            className="h-10 w-10 rounded-full"
          />
          <div>
            <div className="text-sm text-black">{userData?.name}</div>
            <div className="text-xs text-gray-500">@{userData?.username}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
