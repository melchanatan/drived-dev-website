"use client";
import { createContext, useContext, useState } from "react";

const StyleContext = createContext(null);

const StyleProvider = ({ children }) => {
  const [animationDuration, setAnimationDuration] = useState(4800);

  return (
    <StyleContext.Provider
      value={{
        animationDuration,
        setAnimationDuration,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export { StyleProvider, StyleContext };
