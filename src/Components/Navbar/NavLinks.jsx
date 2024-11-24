import React from "react";

const NavLinks = () => {
  const links = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <ul className=" flex  space-x-6  font-light">
      {links.map((link, index) => (
        <li key={index} className="hover:text-blue-200 cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
