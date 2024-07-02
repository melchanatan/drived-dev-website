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

const useStyleContext = () => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error("useStyleContext must be used within a StyleProvider");
  }
  return context;
};

export { StyleProvider, useStyleContext };
