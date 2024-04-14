/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { SectionNameType } from '../libs/types';

type ActiveSectionContextType = {
  activeSection: SectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
  timeOfLastClick: number;
};

type ActiveSectionProviderProps = {
  children: React.ReactNode;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

const ActiveSectionProvider = ({ children }: ActiveSectionProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionNameType>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      'UseActiveSectionContext must be used within an ActiveSectionProvider'
    );
  }
  return context;
};
export default ActiveSectionProvider;
