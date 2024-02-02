import Image from "next/image";
import PostCard from "../../components/Home/PostCard";
import { BsFilm, BsImage } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className="max-sm:px-2">
      <section className="flex bg-white mt-2 rounded-lg items-center justify-between py-3 px-2">
        <Image
          src={"https://picsum.photos/400"}
          className="rounded-full"
          width={32}
          height={32}
        />
        <div className="bg-gray-300 w-[76%] text-xs py-2 px-4 cursor-pointer text-gray-700 rounded-full">
          Write here what you want to say
        </div>
        <div className="flex gap-2">
          <BsFilm className="text-[22px] text-gray-400" />
          <BsImage className="text-[22px] text-gray-400" />
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
