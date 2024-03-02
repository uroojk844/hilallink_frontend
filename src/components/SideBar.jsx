import UserCard from "./UserCard";

const SideBar = () => {
  return (
    <section className="bg-white w-80 absolute -right-10 translate-x-full top-11 p-4 sm:rounded-md">
      <UserCard />
    </section>
  );
};

export default SideBar;
