import { BsArrowRight } from "react-icons/bs";

const Clips = () => {
  return (
    <section className="py-3 px-2 bg-white dark:bg-[hsl(0deg_0%_5%)] sm:rounded-md mt-2">
      <div className="text-lg font-bold mb-3">Clips</div>
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg h-[280px] bg-black overflow-hidden">
          <img
            src={"https://picsum.photos/400?1"}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="rounded-lg h-[280px] bg-black overflow-hidden">
          <img
            src={"https://picsum.photos/400?2"}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="rounded-lg h-[280px] bg-black overflow-hidden">
          <img
            src={"https://picsum.photos/400?3"}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="w-full items-center justify-center gap-3 text-sm mt-3 flex cursor-pointer">
        View All Clips <BsArrowRight />
      </div>
    </section>
  );
};

export default Clips;
