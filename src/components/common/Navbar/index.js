"use client";

import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import AnimatedLink from "../AnimatedLink";
import useStartAnimation from "@/hooks/useStartAnimation";
import { useSpring, animated } from "react-spring";
import { BASE_LOADING_OFFSET } from "@/libs/styleConst";

const Navbar = () => {
  const startAnimation = useStartAnimation(BASE_LOADING_OFFSET + 1000);
  const opacityStart = useStartAnimation(BASE_LOADING_OFFSET + 1000);

  const spring = useSpring({
    y: startAnimation ? 0 : -30,
    from: { y: -30 },
  });

  return (
    <animated.nav
      style={{
        opacity: opacityStart ? 1 : 0,
        ...spring,
      }}
      className="z-50 absolute px-page top-5 flex justify-between items-center w-full text-primary text-md font-tiny5"
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
