"use client";
import React, { useEffect, useState } from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";

const LOGO_SUBNAME = ["Drive", "D ", "Dev"];
const LOGO_NAME = "D:/";
const Logo = () => {
  const [animationState, setAnimationState] = useState(false);
  const [data, setData] = useState(LOGO_SUBNAME);
  const [logo, setLogo] = useState(LOGO_NAME);
  const [open, setOpen] = useState(false);

  const props = useSpring({
    width: open
      ? `${LOGO_SUBNAME.join("").length + 3}ch`
      : `${LOGO_NAME.length + 2.5}ch`,
  });

  const header = useSpring({
    width: !open ? `${LOGO_NAME.length}ch` : `0ch`,
    opacity: !open ? 1 : 0,
  });

  const [toggle, setToggle] = useState(true);

  const [trails, api] = useTrail(LOGO_SUBNAME.length, (item, index) => ({
    config: { mass: 5 },
    opacity: 0,
  }));

  const startAnimation = () => {
    setOpen(true);
    setLogo("");
    api.start({
      to: {
        opacity: 1,
        y: 0,
      },
    });
  };

  const stopAnimation = () => {
    setOpen(false);
    setLogo(LOGO_NAME);
    api.start({
      to: {
        opacity: 0,
        y: 40,
      },
    });
  };

  return (
    <a
      className="py-3 cursor-pointer"
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
    >
      <animated.div
        style={props}
        className="font-tiny5 text-md py-[2px] px-2 bg-primary text-background rounded-[4px] flex"
      >
        <animated.div style={header} className="flex">
          {logo} <p className="animate-blink text-background">_</p>
        </animated.div>

        <div class="flex">
          {trails.map((spring, index) => (
            <animated.div style={spring} className="min-w-[1ch] pr-[1ch]">
              {data[index]}
            </animated.div>
          ))}
        </div>
      </animated.div>
    </a>
  );
};

export default Logo;
