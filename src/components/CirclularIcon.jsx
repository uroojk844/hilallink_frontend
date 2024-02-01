const CircularIcon = ({ children }) => {
  return (
    <div className="grid place-items-center w-12 aspect-square rounded-full cursor-pointer bg-gray-400 text-white hover:bg-gray-500 active:scale-95 transition-transform">
      {children}
    </div>
  );
};

export default CircularIcon;
