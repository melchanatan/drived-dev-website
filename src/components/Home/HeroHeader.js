"use client";
import React from "react";
import useStartAnimation from "@/hooks/useStartAnimation";
import { useSpring, animated } from "react-spring";

const HeroHeader = () => {
  const startAnimation = useStartAnimation(400);

  const spring = useSpring({
    x: startAnimation ? 0 : -100,
    from: { x: -100 },
  });

  return (
    <animated.div
      style={spring}
      className="absolute left-page bottom-page flex flex-col gap-2 [&>*]:flex [&>*]:gap-3 [&>*]:items-center z-20"
    >
      <span>
        <h1 className="hero-header__sub">Your</h1>
        <h1 className="hero-header highlight">path:// </h1>
      </span>
      <span>
        <h1 className="hero-header highlight">to something</h1>
      </span>
      <span>
        <h1 className="hero-header__sub">digitally</h1>
        <h1 className="hero-header highlight">special</h1>
      </span>
    </animated.div>
  );
};

export default HeroHeader;
