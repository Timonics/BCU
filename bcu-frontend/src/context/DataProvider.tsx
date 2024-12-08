import React, { createContext, useContext, useState } from "react";
import {
  MyAppProviderProps,
  MyAppContext,
} from "../interfaces/component-interfaces";

const MyContext = createContext<MyAppContext | undefined>(undefined);

const DataProvider: React.FC<MyAppProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const contextValues = {
    darkMode,
    setDarkMode,
  };
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyAppDataProvider");
  }
  return context;
};

export default DataProvider;
