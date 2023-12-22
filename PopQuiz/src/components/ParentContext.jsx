import React, { createContext, useState } from "react";

export const AppContext = createContext();

const MainContext = ({ children }) => {
    const [click, setClick] = useState("Homepage");
    const [score, setScore] = useState(0);


  return (
    <AppContext.Provider
      value={{
        click,
        setClick,
        score,
        setScore
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MainContext;