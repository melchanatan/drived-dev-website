import React from "react";
import Logo from "./Logo";
import Demo from "./Demo";
const Navbar = () => {
  return (
    <nav className="z-50 absolute px-page top-5 flex justify-between items-center w-full text-primary text-lg font-tiny5">
      <Logo className="absolute left-page" />
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-[6vw]">
        <a href="">team</a>
        <a href="">playground</a>
      </div>
      <button>EN/TH</button>
    </nav>
  );
};

export default Navbar;
