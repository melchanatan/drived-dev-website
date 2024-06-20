import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "X", url: "#" },
    { name: "Line", url: "#" },
    { name: "LinkedIn", url: "#" },
  ];

  return (
    <div className="bg-primary text-background px-4 py-8 font-raster flex justify-between">
      <p className="">©2024 Drive D Dev All Rights Reserved</p>
      <ul className="flex gap-4">
        {socialLinks.map((link, index) => {
          const isLast = index === socialLinks.length - 1;

          return (
            <>
              <li>
                <a href={link.url} key={link.name}>
                  {link.name}
                </a>
              </li>
              {!isLast && <span>|</span>}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
