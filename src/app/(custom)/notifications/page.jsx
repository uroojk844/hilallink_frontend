import NotificationCard from "@/components/Notifications/NotificationCard";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { PiUserCirclePlusLight } from "react-icons/pi";

const ShortsPage = () => {
  return (
    <div className="bg-white dark:bg-[hsl(200,6%,10%)] p-4 rounded-md w-full small">
      <div className="text-xl font-bold">Notifications</div>
      <Link href={"/follow-requests"}>
        <section className="flex items-center gap-2 mt-4 mb-2 relative cursor-pointer">
          <PiUserCirclePlusLight className="text-[48px]" />
          <div>
            <div className="text-sm mb-1 font-bold">Follow Requests</div>
            <div className="text-xs text-gray-500 dark:text-[#afa99e]">
              uroojk844, belalnaim9 + 5 others
            </div>
          </div>
          <BsArrowRight className="absolute right-0" />
        </section>
      </Link>
      <section className="gap-y-4 grid mt-4">
        <div className="font-bold">Today</div>
        {"abg".split("").map((item, index) => {
          return <NotificationCard index={index} key={index} />;
        })}
      </section>
      <section className="gap-y-4 grid mt-4">
        <div className="font-bold">This week</div>
        {"abcfg".split("").map((item, index) => {
          return <NotificationCard index={index} key={index} />;
        })}
      </section>
    </div>
  );
};

export default ShortsPage;
