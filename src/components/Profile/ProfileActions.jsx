import React from 'react'
import { BsShare } from 'react-icons/bs';
import { MdBlock } from "react-icons/md";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
const ProfileActions = ({refProp}) => {
  return (
    <div ref={refProp} className="absolute text-sm bg-white shadow-lg rounded-md overflow-hidden w-[140px] top-11 -left-10">
      <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100">
        <MdBlock className="text-lg" />
        Block
      </div>
      <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100">
        <MdOutlineReportGmailerrorred className="text-lg" />
        Report
      </div>
      <div className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100">
        <BsShare className="text-sm" />
        Share profile
      </div>
    </div>
  );
}

export default ProfileActions