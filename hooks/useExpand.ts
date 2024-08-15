import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const useExpand = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const newComponentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (expanded !== null && newComponentRef.current) {
      const newComponent = newComponentRef.current;

      gsap.fromTo(
        newComponent,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          duration: 0.5,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
        }
      );
    } else if (newComponentRef.current) {
      gsap.to(newComponentRef.current, {
        duration: 0.5,
        opacity: 0,
        scale: 0.8,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(newComponentRef.current, { scale: 1, opacity: 1 });
        },
      });
    }
  }, [expanded]);

  const handleExpand = (index: number | null) => {
    setExpanded(expanded === index ? null : index);
  };

  return {
    expanded,
    containerRef,
    newComponentRef,
    handleExpand,
  };
};

export default useExpand;
