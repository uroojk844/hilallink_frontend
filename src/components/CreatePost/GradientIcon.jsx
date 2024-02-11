import React from 'react'

const GradientIcon = () => {
  return (
    <div
      className="cursor-pointer rounded text-xs font-bold  text-white h-7 w-7 grid place-items-center bg-black"
      style={{
        backgroundImage: "url('./gradient.jpg')",
        backgroundSize: "cover",
      }}
    >
      <span className="drop-shadow-md">Abc</span>
    </div>
  );
}

export default GradientIcon