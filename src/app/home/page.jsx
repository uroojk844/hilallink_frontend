import PostCard from "../components/Home/PostCard";

const HomePage = () => {
  return (
    <section className="max-sm:px-2">
      {
        "abcdefg".split('').map((item, index) => {
          return <PostCard key={index} index={index} />
        })
      }
    </section>
  )
 
};

export default HomePage;
