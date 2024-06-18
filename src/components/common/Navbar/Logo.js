"use client";
import React, { useEffect, useState } from "react";
import { useTrail, animated, useSpring } from "@react-spring/web";
import useMeasure from "react-use-measure";

const LOGO_SUBNAME = "Dev";
const LOGO_NAME = "D:/";
const Logo = () => {
  const [animationState, setAnimationState] = useState(false);
  const [data, setData] = useState(LOGO_SUBNAME);
  const [open, setOpen] = useState(false);

  const props = useSpring({
    width: open
      ? `${LOGO_NAME.length + LOGO_SUBNAME.length + 1.5}ch`
      : `${LOGO_NAME.length + 1.5}ch`,
  });

  const [trails, api] = useTrail(
    LOGO_SUBNAME.length,
    (child, i) => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { mass: 5, tension: 300, friction: 10 },
      delay: 10 + (!open ? LOGO_SUBNAME.length - i : i) * 100,
    }),
    []
  );

  const startAnimation = () => {
    setOpen(true);
    api.start({ to: { opacity: 1 } });
  };

  const stopAnimation = () => {
    setOpen(false);
    api.start({
      to: { opacity: 0 },
    });
  };

  return (
    <animated.div
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      style={props}
      className="font-tiny5 text-md py-[2px] px-2 bg-primary text-background rounded-[4px] flex"
    >
      <span></span>
      <p>D:/</p>
      <div class="flex">
        {trails.map((spring, index) => (
          <animated.div style={spring}>{data[index]}</animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default Logo;
