import Link from "next/link";
import {
  BsAt,
  BsBell,
  BsChat,
  BsChatDots,
  BsEyeSlash,
  BsLock,
  BsShield,
  BsTrash,
} from "react-icons/bs";
import { MdBlock } from "react-icons/md";

const PrivacySettings = () => {
  return (
    <div className="medium bg-white sm:rounded-md h-[calc(100dvh-64px)]">
      <div className="font-bold border-b text-lg p-3">Privacy settings</div>
      <div className="px-3">
        <div className="p-3 flex items-center gap-2 justify-between">
          <div className="flex items-center gap-3">
            <BsShield className="text-lg" /> Private Account
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <Link href="/change-password">
          <div className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer">
            <BsLock className="text-lg" /> Change Password
          </div>
        </Link>
        <Link href="/blocked-accounts">
          <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100">
            <MdBlock className="text-lg" /> Blocked Accounts
          </div>
        </Link>
        <div className="p-3 flex items-start gap-3">
          <BsBell className="text-lg" />{" "}
          <div>
            <div>Notifications</div>
            <label className="flex text-sm gap-2 mt-2">
              <input type="checkbox" name="tag" id="" /> Push Notifications
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="checkbox" name="tag" id="" /> Email Notifications
            </label>
          </div>
        </div>
        <div className="p-3 flex items-start gap-3">
          <BsChatDots className="text-lg" />{" "}
          <div>
            <div>Who can message you</div>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> Everyone on HilalLink
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> My Followers
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> No one
            </label>
          </div>
        </div>
        <div className="p-3 grid gap-3">
          <div className="flex items-center gap-3">
            <BsEyeSlash className="text-lg" /> Likes, Replies and Repost
          </div>
          <div className="ml-7">
            <label className="flex text-sm gap-2">
              <input type="radio" name="tag" id="" /> Everyone on HilalLink
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> My Followers
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> No one
            </label>
          </div>
        </div>
        <div className="p-3 flex items-start gap-3">
          <BsAt className="text-lg" />{" "}
          <div>
            <div>Tags and Mentions</div>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> Everyone on HilalLink
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> My Followers
            </label>
            <label className="flex text-sm gap-2 mt-2">
              <input type="radio" name="tag" id="" /> No one
            </label>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 text-red-600">
          <BsTrash className="text-lg" /> Delete Account
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
