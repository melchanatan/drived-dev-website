import { useSpring, animated, useTrail, useChain } from "react-spring";
import React, { useEffect, useState } from "react";

const Mouth = ({ isRotated }) => {
  const [chomping, setChomping] = useState(true);

  const spring = useSpring({
    height: chomping ? 100 : 2,
    config: { mass: 1, tension: 200, friction: 6 },
  });

  useEffect(() => {
    swapEyebrownPos();
  }, []);

  const swapEyebrownPos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2400));
    setChomping(!chomping);
  };

  return (
    <>
      <div className="loading__mouth--cover z-[102]" />
      <span
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
    </>
  );
};

export default Mouth;
