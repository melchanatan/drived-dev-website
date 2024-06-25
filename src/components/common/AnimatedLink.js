import React from "react";

const AnimatedLink = ({ children, href }) => {
  return (
    <a className="" href={href}>
      {children}
    </a>
  );
};

export default AnimatedLink;
