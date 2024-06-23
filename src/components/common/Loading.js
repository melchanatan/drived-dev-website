"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated, useTrail, useChain } from "react-spring";
import useMeasure from "react-use-measure";

const Loading = () => {
  const [chomping, setChomping] = useState(true);
  const [animationStart, setAnimationStart] = useState(false);
  const [eyebrownPos, setEyebrownPos] = useState(true);
  const [isRotated, setIsRotated] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    setAnimationStart(true);
    swapEyebrownPos();
    // Add the no-scroll class to the body element

    // Cleanup by removing the no-scroll class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const swapEyebrownPos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2400));
    setChomping(!chomping);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setEyebrownPos(!eyebrownPos);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEyebrownPos(eyebrownPos);
    setIsRotated(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setShowLoading(false);
    document.body.classList.remove("no-scroll");
  };

  const spring = useSpring({
    height: chomping ? 100 : 2,
    config: { mass: 1, tension: 200, friction: 6 },
  });

  const emojiPools = ["📁", "📃", "📖", ""];
  const messages = emojiPools;

  return (
    <section
      className="fixed flex justify-center items-center bg-primary  text-background w-full h-full z-[100] overflow-hidden transition-all duration-200"
      style={{
        opacity: showLoading ? 1 : 0,
        visibility: showLoading ? "visible" : "hidden",
      }}
    >
      <animated.div
        className="flex gap-[30px] absolute top-1/2 translate-y-[50%] z-[101] left-[calc(50%-300px)]  duration-[4000ms] transition-all"
        style={{
          translateX: animationStart ? 400 : 0,
        }}
      >
        {messages.map((r, index) => {
          return (
            <p className="text-4xl animate-big-bounce">{messages[index]}</p>
          );
        })}
      </animated.div>
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="font-tiny5 text-[5rem] -rotate-90">
          :{eyebrownPos ? "/" : "\\"}
        </h1>
        <div className="loading__mouth--cover z-[102]"></div>
        <span
          className="z-auto"
          style={{
            rotate: isRotated ? "180deg" : "0deg",
            transform: isRotated ? "translateY(40px)" : "",
          }}
        >
          <div className="loading__mouth--top"></div>
          <animated.div
            className="z-[100] loading__mouth--front"
            style={spring}
          ></animated.div>
        </span>
        <animated.div
          className="z-[110] loading__mouth--back"
          style={{ ...spring, opacity: isRotated ? 0 : 1 }}
        ></animated.div>
      </div>
    </section>
  );
};

export default Loading;
