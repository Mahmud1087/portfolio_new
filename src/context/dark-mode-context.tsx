/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';

type DarkModeContextProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  toggleTheme: () => void;
};

type ChildrenType = {
  children: React.ReactNode;
};

type Theme = 'light' | 'dark';

const DarkModeContext = createContext<DarkModeContextProps | null>(null);

const DarkModeContextProvider = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
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
