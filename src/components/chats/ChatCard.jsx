import Link from "next/link";

const ChatCard = ({ user }) => {
  return (
    <Link
      href={`chats/${user.id}`}
      className="hover:bg-gray-200 dark:hover:bg-[hsl(0deg_0%_5%)] cursor-pointer flex items-center gap-3 p-3 border-b "
    >
      <img
        className="h-12 w-12 rounded-full object-contain"
        src={user.picture}
        alt={user.name}
      />
      <div>
        <div className="font-[600]">{user.name}</div>
        <div className="text-xs mt-1 text-gray-500">{user.lastChat}</div>
      </div>
    </Link>
  );
};

export default ChatCard;
