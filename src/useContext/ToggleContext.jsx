import React, { createContext, useState } from "react";

export const appContext = createContext();

const ToggleContext = ({ children }) => {
  const [togg, setTogg] = useState(false);
  const [night, setNight] = useState(false);
  return (
    <>
      <appContext.Provider value={{ togg, setTogg, night, setNight }}>
        {children}
      </appContext.Provider>
    </>
  );
};

export default ToggleContext;
