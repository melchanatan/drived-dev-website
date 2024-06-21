"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const Loading = () => {
  const [chomping, setChomping] = useState(false);

  const playAnimation = () => {
    setChomping(!chomping);
  };

  const spring = useSpring({
    height: chomping ? 80 : 30,
    config: { mass: 3, tension: 200, friction: 6 },
  });

  return (
    <section className="absolute flex justify-center items-center bg-primary  text-background w-full h-full z-[100] overflow-hidden">
      <button onClick={playAnimation} className="absolute top-0">
        yes
      </button>
      <div className="flex gap-2 absolute top-1/2 translate-y-[50%] z-[101] ">
        <p className="loading__text">loading</p>
        <p className="loading__text ">please</p>
        <p className="loading__text">wait</p>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="font-tiny5 text-[5rem] -rotate-90">:/</h1>
        <div className="loading__mouth--cover z-[102]"></div>
        <span>
          <div className="loading__mouth--top"></div>
          <animated.div
            className="z-[100] loading__mouth--front"
            style={spring}
          ></animated.div>
          <animated.div
            className="z-[110] loading__mouth--back"
            style={spring}
          ></animated.div>
        </span>
      </div>
    </section>
  );
};

export default Loading;
