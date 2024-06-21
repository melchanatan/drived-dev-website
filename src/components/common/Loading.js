"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const Loading = () => {
  const [chomping, setChomping] = useState(false);

  const playAnimation = () => {
    setChomping(!chomping);
  };

  const spring = useSpring({
    height: chomping ? 80 : 10,
    config: { mass: 5, tension: 200, friction: 6 },
  });

  return (
    <section className="absolute flex justify-center items-center bg-primary  text-background w-full h-full z-[100]">
      <button onClick={playAnimation} className="absolute top-0">
        yes
      </button>
      <div className="flex gap-2">
        <p className="loading__text">loading</p>
        <p className="loading__text">please</p>
        <p className="loading__text">wait</p>
      </div>
      <div className=" flex flex-col justify-center items-center ">
        <h1 className="font-tiny5 text-[5rem] relative -rotate-90">D:/</h1>
        <span>
          <animated.div className="loading__mouth--front" style={spring}>
            <animated.div
              className="z-[101] absolute loading__mouth--back"
              style={spring}
            ></animated.div>
          </animated.div>
        </span>
      </div>
    </section>
  );
};

export default Loading;
