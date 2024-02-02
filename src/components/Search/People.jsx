import PeopleCard from "./PeopleCard";

const People = () => {
  return (
    <div className="bg-white mt-2 rounded-md overflow-hidden">
          {
              "abcdef".split('').map((item, index) => {
                  return <PeopleCard index={index} key={index} />
              })
      }
    </div>
  );
};

export default People;
