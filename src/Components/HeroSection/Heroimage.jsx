import React from "react";
import Bannerimage from "../../assets/cryptobanner.jpeg";

const Heroimage = () => {
  return (
    <div className="flex justify-center items-center h-full w-full p-2">
      <img
        className="h-full w-full object-cover rounded-xl"
        src={Bannerimage}
        alt="Banner"
      />
    </div>
  );
};

export default Heroimage;
