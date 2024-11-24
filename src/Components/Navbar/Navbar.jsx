import React from "react";
import Logos from "./Logos";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-16 py-6 ">
      <Logos />
      <NavLinks />
    </div>
  );
};

export default Navbar;
