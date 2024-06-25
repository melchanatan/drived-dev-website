"use client";
import React, { useRef, useState } from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";

const LOGO_SUBNAME = ["Drive", "D ", "Dev"];
const LOGO_NAME = "D:/";

const Logo = () => {
  const [logo, setLogo] = useState(LOGO_NAME);
  const [open, setOpen] = useState(false);
  const [timeout, setTimeout] = useState(null);
  const ignoreRef = useRef();

  const backgroundSpring = useSpring({
    width: open
      ? `${LOGO_SUBNAME.join("").length + 3}ch`
      : `${LOGO_NAME.length + 2.5}ch`,
  });

  const headerSpring = useSpring({
    width: !open ? `${LOGO_NAME.length}ch` : `0ch`,
    opacity: !open ? 1 : 0,
  });

  const [trails, api] = useTrail(LOGO_SUBNAME.length, () => ({
    config: { mass: 5 },
    opacity: 0,
  }));

  const startAnimation = (e) => {
    if (e.target == ignoreRef.current && timeout) return;

    setTimeout(() => {
      setTimeout(true);
    }, 1000);

    setOpen(true);
    setLogo("");
    api.start({
      to: {
        opacity: 1,
        y: 0,
        display: "flex",
      },
    });
  };

  const stopAnimation = (e) => {
    if (e.target == ignoreRef.current) return;

    setLogo(LOGO_NAME);
    api.start({
      to: {
        opacity: 0,
        y: 40,
      },
    });
    setOpen(false);
  };

  return (
    <a
      className="py-3 cursor-pointer"
      onMouseOver={startAnimation}
      onMouseLeave={stopAnimation}
    >
      <animated.div
        style={backgroundSpring}
        className="font-tiny5 text-md py-[2px] px-2 bg-primary text-background rounded-[4px] flex"
      >
        <animated.div style={headerSpring} className="flex">
          {logo} <p className="animate-blink text-background">_</p>
        </animated.div>

        <div class="flex" ref={ignoreRef}>
          {trails.map((spring, index) => (
            <animated.div style={spring} className="min-w-[1ch] pr-[1ch]">
              {LOGO_SUBNAME[index]}
            </animated.div>
          ))}
        </div>
      </animated.div>
    </a>
  );
};

export default Logo;
