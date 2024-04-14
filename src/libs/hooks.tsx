import { useInView } from 'react-intersection-observer';
import { SectionNameType } from './types';
import { useActiveSectionContext } from '../context/avtive-section-context';
import { useEffect } from 'react';

export const useScrollView = (
  sectionName: SectionNameType,
  threshold = 0.85
) => {
  const { ref, inView } = useInView({
    threshold,
  });

  const { timeOfLastClick, setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName);
  }, [inView, timeOfLastClick, setActiveSection, sectionName]);

  return { ref };
};
