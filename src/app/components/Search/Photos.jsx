import PostCard from "../Home/PostCard";

const Photos = () => {
    return <>
        {
            "abcdefg".split('').map((item, index) => {
                return <PostCard key={index} index={index} />
            })
    }
    </>;
};

export default Photos;
