"use client";

import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import { useSpring, animated } from "react-spring";
import AnimatedLink from "../AnimatedLink";
import { useStyleContext } from "@/libs/styleContext";
import useStartAnimation from "@/hooks/useStartAnimation";

const Navbar = () => {
  const startAnimation = useStartAnimation();

  const spring = useSpring({
    y: startAnimation ? 0 : -100,
    from: { y: -100 },
  });

  return (
    <animated.nav
      style={spring}
      className="z-50 absolute px-page top-5 flex justify-between items-center w-full text-primary text-lg font-tiny5"
    >
      <Logo className="absolute left-page" />
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-[6vw]">
        <AnimatedLink href="">team</AnimatedLink>
        <AnimatedLink href="">playground</AnimatedLink>
      </div>
      <button>EN/TH</button>
    </animated.nav>
  );
};

export default Navbar;
