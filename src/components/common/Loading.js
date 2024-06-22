"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated, useTrail, useChain } from "react-spring";
import useMeasure from "react-use-measure";

const Loading = () => {
  const [chomping, setChomping] = useState(true);
  const [animationStart, setAnimationStart] = useState(false);
  let currentIndex = 0;

  const [ref, { width }] = useMeasure();

  useEffect(() => {
    // timer to toggle is chomping
    const timer = setInterval(() => {
      setChomping(!chomping);
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  });

  const spring = useSpring({
    height: chomping ? 100 : 2,
    config: { mass: 1, tension: 200, friction: 6 },
  });

  const emojiPools = ["📁", "📃", "📖", ""];
  const messages = emojiPools;
  const trails = useTrail(messages.length, {
    x: width * 2,
    config: { duration: 2000 },
    reverse: true,
  });

  const playAnimation = () => {
    setChomping(!chomping);
    // api.start({
    //   to: {
    //     opacity: 0,
    //     y: 40,
    //   },
    // });
  };

  return (
    <section className="absolute flex justify-center items-center bg-primary  text-background w-full h-full z-[100] overflow-hidden">
      <button onClick={playAnimation} className="absolute top-0">
        yes
      </button>
      <animated.div
        ref={ref}
        className="flex gap-10 absolute top-1/2 translate-y-[50%] left-[-100px] z-[101] animate-big-bounce"
        // style={{
        //   left: -width * 3,
        // }}
      >
        {trails.map((r, index) => {
          currentIndex = index;

          return (
            <animated.div style={r} className="text-4xl">
              {messages[index]}
            </animated.div>
          );
        })}
      </animated.div>
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
