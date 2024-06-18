import React from "react";
import Logo from "./Logo";
import Demo from "./Demo";
const Navbar = () => {
  return (
    <nav className="z-50 absolute px-page top-4 flex justify-between items-center w-full text-primary text-md font-tiny5">
      <Logo />
      <div className="flex gap-[6vw]">
        <a href="">team</a>
        <a href="">playground</a>
      </div>
      <button>EN/TH</button>
    </nav>
  );
};

export default Navbar;
