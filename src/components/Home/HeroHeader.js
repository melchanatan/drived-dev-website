"use client";
import React from "react";
import useStartAnimation from "@/hooks/useStartAnimation";
import { useSpring, animated } from "react-spring";
import { BASE_LOADING_OFFSET } from "@/libs/styleConst";

const HeroHeader = () => {
  const startAnimation = useStartAnimation(BASE_LOADING_OFFSET + 700);
  const opacityStart = useStartAnimation(BASE_LOADING_OFFSET + 600);

  const spring = useSpring({
    y: startAnimation ? 0 : 100,
    from: { y: 100 },
  });

  return (
    <animated.div
      style={{
        opacity: opacityStart ? 1 : 0,
        ...spring,
      }}
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
