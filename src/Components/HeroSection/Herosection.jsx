import React from "react";
import Newlist from "./Newlist";
import Herobutton from "./Herobutton";
import Heroheader from "./Heroheader";
import Herotext from "./Herotext";
import Heroimage from "./Heroimage";

const Herosection = () => {
  return (
    <div>
      <div className="grid grid-cols-6 grid-rows-6 gap-0 h-screen w-screen">
        <div className="col-start-1 col-end-5 row-start-1 row-end-4 ">
          <Heroimage />5
        </div>
        <div className="col-start-5 col-end-7 row-start-1 row-end-7">
          <Newlist />
        </div>
        <div className="col-start-1 col-end-3 row-start-4 row-end-7 bg-green-500">
          <Heroheader />
        </div>
        <div className="col-start-3 col-end-5 row-start-4 row-end-6 bg-yellow-500">
          <Herotext />
        </div>
        <div className="col-start-3 col-end-5 row-start-6 row-end-7 bg-purple-500">
          <Herobutton />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
