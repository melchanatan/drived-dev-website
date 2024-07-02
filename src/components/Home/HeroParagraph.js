"use client";
import React from "react";
import useStartAnimation from "@/hooks/useStartAnimation";
import { useSpring, animated } from "react-spring";

const HeroParagraph = () => {
  const startAnimation = useStartAnimation(600);

  const spring = useSpring({
    y: startAnimation ? 0 : 100,
    from: { y: 100 },
  });

  return (
    <animated.p
      style={spring}
      className="absolute right-page bottom-page text-primary w-[35ch] text-right text-md font-raster"
    >
      We strive to be your trusted technology partner. We turn your ideas into
      reality with boundless creativity and expertise. Enjoy peace of mind
      knowing you're getting fair pricing and exceptional service.
    </animated.p>
  );
};

export default HeroParagraph;
