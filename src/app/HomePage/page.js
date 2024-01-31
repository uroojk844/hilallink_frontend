import PostCard from "../components/Home/PostCard";

const HomePage = () => {
  return (
    <section>
      {
        "abcdefg".split('').map((item, index) => {
          return <PostCard key={index} index={index} />
        })
      }
    </section>
  )
 
};

export default HomePage;
