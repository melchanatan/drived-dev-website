"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const Loading = () => {
  const [chomping, setChomping] = useState(false);

  //   useEffect(() => {
  //     console.log(spring);
  //     setInterval(() => {
  //       setTimeout(() => {
  //         setChomping(true);
  //       }, 2000);
  //     }, []);
  //   }, []);
  const playAnimation = () => {
    setChomping(!chomping);
  };

  const spring = useSpring({
    width: chomping ? 100 : 10,
    config: { mass: 5, tension: 100, friction: 4 },
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
      <div className="">
        <h1 className=" font-tiny5 text-[5rem] relative flex flex-row justify-end items-center">
          <span>
            <animated.div className="loading__mouth--front" style={spring}>
              <animated.div
                className="z-[101] absolute loading__mouth--back"
                style={spring}
              ></animated.div>
            </animated.div>
          </span>
          D:/
        </h1>
      </div>
    </section>
  );
};

export default Loading;
