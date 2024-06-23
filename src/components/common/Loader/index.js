"use client";
import React, { useEffect, useState } from "react";
import Mouth from "./Mouth";
import FoodTrail from "./FoodTrail";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4800);
  });
  if (loading) return <LoadingFace />;
};

export default Loader;

const LoadingFace = () => {
  const foodPool = ["📁", "📃", "📖"];
  const foods = foodPool;

  const [chomping, setChomping] = useState(true);
  const [startFoodTrails, setStartFoodTrails] = useState(false);
  const [eyebrownPos, setEyebrownPos] = useState(true);
  const [mouthRotated, setMouthRotated] = useState(false);

  useEffect(() => {
    startAnimationManager();

    // prevent window scroll
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const startAnimationManager = async () => {
    setStartFoodTrails(true);
    await new Promise((resolve) => setTimeout(resolve, 2400));
    setChomping(!chomping);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setEyebrownPos(!eyebrownPos);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEyebrownPos(eyebrownPos);
    setMouthRotated(true);
  };

  return (
    <section className="fixed flex justify-center items-center bg-primary  text-background w-full h-full z-[100] overflow-hidden">
      <FoodTrail start={startFoodTrails} foods={foods} />
      <div className="flex flex-col justify-center items-center relative">
        <h1 className="font-tiny5 text-[5rem] -rotate-90">
          :{eyebrownPos ? "/" : "\\"}
        </h1>
        <Mouth chomping={chomping} isRotated={mouthRotated} />
      </div>
    </section>
  );
};
