import React from "react";
import { animated } from "react-spring";

const FoodTrail = ({ start = false, foods = [] }) => {
  return (
    <animated.div
      className="flex gap-[30px] absolute top-1/2 translate-y-[50%] z-[101] left-[calc(50%-300px)]  duration-[4000ms] transition-all"
      style={{
        translateX: start ? 400 : 0,
      }}
    >
      {foods.map((r, index) => {
        return <p className="text-4xl animate-big-bounce">{foods[index]}</p>;
      })}
    </animated.div>
  );
};

export default FoodTrail;
