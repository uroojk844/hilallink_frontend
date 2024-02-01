const Avatar = ({ src = "http://picsum.photos/32.webp" }) => {
  return <img src={src} className="w-10 aspect-square rounded-full" />;
};

export default Avatar;
