"use client";
import { useTrail, animated } from "@react-spring/web";

export default function Demo() {
  const trails = useTrail(2, {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 5, tension: 170, friction: 20 },
  });

  return (
    <div>
      {trails.map((props) => (
        <animated.div style={props}>Hello Wosrld</animated.div>
      ))}
    </div>
  );
}
