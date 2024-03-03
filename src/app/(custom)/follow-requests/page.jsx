import FollowRequest from "@/components/Notifications/FollowRequest";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

const page = () => {
  return (
    <div className="bg-white dark:bg-[hsl(200,6%,10%)] p-4 rounded-md small">
      <div className="text-xl font-bold mb-4 flex items-center gap-4">
        <Link href="/notifications">
          <BsArrowLeft />
        </Link>
        Follow requests
      </div>
      <section className="grid gap-y-5">
        {"abcdefg".split("").map((item, index) => {
          return <FollowRequest index={index} key={index} />;
        })}
        <FollowRequest />
      </section>
    </div>
  );
};

export default page;
