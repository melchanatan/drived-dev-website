import React, { useState, useEffect } from "react";
import { ANIMATION_DURATION, LOADING_OFFSET } from "@/libs/styleConst";

const useStartAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, ANIMATION_DURATION + LOADING_OFFSET);
  }, []);

  return startAnimation;
};

export default useStartAnimation;
