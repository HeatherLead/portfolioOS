import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const useExpand = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const newComponentRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    if (expanded !== null && newComponentRef.current) {
      const tl = gsap.timeline();

      tl.set(newComponentRef.current,{
        transformOrigin:"bottom"
      })

      tl.fromTo(
        newComponentRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          duration: 0.5,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
        }
      );
      timelineRef.current = tl;
    } 
  }, [expanded]);

  const handleExpand = (index: number | null) => {
    if (timelineRef.current && expanded !== null) {
      timelineRef.current.reverse().then(() => setExpanded(index));
    } else {
      setExpanded(index);
    }
  };

  return {
    expanded,
    containerRef,
    newComponentRef,
    handleExpand,
  };
};

export default useExpand;
