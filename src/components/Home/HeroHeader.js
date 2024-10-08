"use client";
import React from "react";
import useStartAnimation from "@/hooks/useStartAnimation";
import { useSpring, animated, useTrail } from "react-spring";
import { BASE_LOADING_OFFSET } from "@/libs/styleConst";

const HeroHeader = () => {
  const startAnimation = useStartAnimation(BASE_LOADING_OFFSET + 700);
  const opacityStart = useStartAnimation(BASE_LOADING_OFFSET + 600);

  const trailsComponents = [
    <>
      <h1 className="hero-header__sub" key="hero-header-1">
        Your
      </h1>
      ,<h1 className="hero-header highlight">path:// </h1>
    </>,
    <h1 className="hero-header highlight" key="hero-header-2">
      to something
    </h1>,
    <>
      <h1 className="hero-header__sub" key="hero-header-3">
        digitally
      </h1>
      <h1 className="hero-header highlight" key="hero-header-4">
        special
      </h1>
    </>,
  ];

  const trails = useTrail(trailsComponents.length, {
    config: { mass: 3, tension: 200 },
    y: startAnimation ? 0 : 100,
    from: { y: 100 },
  });

  return (
    <div
      className="absolute left-page bottom-page flex flex-col gap-2 [&>*]:flex [&>*]:gap-3 [&>*]:items-center z-20 "
      style={{
        opacity: opacityStart ? 1 : 0,
      }}
    >
      {trails.map((trail, index) => (
        <animated.div style={trail} key={"hero-header-" + index}>
          {trailsComponents[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default HeroHeader;
