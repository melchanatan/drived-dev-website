import React, { useState, useEffect } from "react";
import { ANIMATION_DURATION } from "@/libs/styleConst";

const useStartAnimation = (offset = 300) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, ANIMATION_DURATION + offset);
  }, []);

  return startAnimation;
};

export default useStartAnimation;
