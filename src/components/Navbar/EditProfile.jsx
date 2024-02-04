import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const EditProfile = () => {
  return (
    <section className="fixed inset-0 glass z-50 grid place-items-center">
      <div className="w-[min(520px,100%)] bg-white rounded-md overflow-hidden">
        <div className="flex items-center gap-3 text-lg font-bold p-3">
          <BsArrowLeft />
          Edit your profile
        </div>
        <section>
          <div>
            <img src="https://picsum.photos/400" alt="" className="w-full h-[160px] object-cover"/>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EditProfile;
