"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated, useTrail, useChain } from "react-spring";
import Mouth from "./Mouth";
const Loading = () => {
  const [chomping, setChomping] = useState(true);
  const [animationStart, setAnimationStart] = useState(false);
  const [eyebrownPos, setEyebrownPos] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    setAnimationStart(true);
    swapEyebrownPos();
  }, []);

  const swapEyebrownPos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2400));
    setChomping(!chomping);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setEyebrownPos(!eyebrownPos);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEyebrownPos(eyebrownPos);
    setIsRotated(true);
  };

  const emojiPools = ["📁", "📃", "📖", ""];
  const messages = emojiPools;

  return (
    <section className="fixed flex justify-center items-center bg-primary  text-background w-full h-full z-[100] overflow-hidden">
      {/* <animated.div
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
        </h1> */}
      <Mouth chomping={chomping} isRotated={isRotated} />
      {/* </div> */}
    </section>
  );
};

export default Loading;
