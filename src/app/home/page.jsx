import Image from "next/image";
import PostCard from "../../components/Home/PostCard";

const HomePage = () => {
  return (
    <div className="small">
      <section className="flex bg-white sm:mt-2 max-sm:border-b sm:rounded-lg items-center gap-2 py-3 px-2">
        <Image
          src={"https://picsum.photos/400"}
          className="rounded-full"
          width={32}
          height={32}
          alt="user"
        />
        <div className="bg-gray-200 text-xs py-2.5 px-4 cursor-pointer text-gray-00 rounded-full w-full">
          Write here what you want to say
        </div>
      </section>
      <section>
        {"abcdefg".split("").map((item, index) => {
          return <PostCard key={index} index={index} />;
        })}
      </section>
    </div>
  );
};

export default HomePage;
