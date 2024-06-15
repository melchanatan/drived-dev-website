import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute px-page top-4 flex justify-between items-center w-full text-primary text-md font-tiny5">
      <div className="font-tiny5 py-[2px] px-2 bg-primary text-background rounded-[4px]">
        <p>D:/</p>
      </div>
      <div className="flex gap-[6vw]">
        <a href="">team</a>
        <a href="">playground</a>
      </div>
      <button>EN/TH</button>
    </nav>
  );
};

export default Navbar;
