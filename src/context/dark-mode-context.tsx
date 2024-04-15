/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

type DarkModeContextTypes = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
};

type DarkModeContextProviderProps = {
  children: React.ReactNode;
};

const DarkModeContext = createContext<DarkModeContextTypes | null>(null);

const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeCotext = () => {
  const context = useContext(DarkModeContext);
  if (context === null)
    throw new Error('DarkModeContext must be used within a DarkModeProvider');
  return context;
};

export default DarkModeContextProvider;
