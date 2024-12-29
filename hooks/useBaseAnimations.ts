import { MutableRefObject, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Screen } from "@/app/(components)/mail";
import { useGSAP } from "@gsap/react";

interface UseBaseAnimationsProps {
    id: string;
    screenWidth: Screen;
    t1Ref: MutableRefObject<GSAPTimeline | null>;
}

export const useBaseAnimations = ({ id, screenWidth, t1Ref }: UseBaseAnimationsProps) => {
    const [firstLoad, setFirstLoad] = useState(true);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        containerRef.current = document.getElementById(id) as HTMLDivElement;
        if (containerRef.current) {
          
        } else {
          console.error("Element with id", id, "not found");
        }
      }, [id]);

    useEffect(() => {
        if (!containerRef.current) return;
        const t1 = gsap.timeline();
        
        if (t1Ref.current === null) t1Ref.current = t1;

        if (firstLoad) {
            gsap.set(containerRef.current, {
                opacity: 0,
                bottom: 0,
                width: 0,
                height: 0,
                transformOrigin: "bottom",
            });

            t1.to(containerRef.current, {
                bottom: "15%",
                width: "20%",
                height: "60%",
                ease: "power2.in",
            }).to(
                containerRef.current,
                {
                    opacity: 100,
                    width: id === "games" || "project" ?"80%" :"70%",
                    height:"80%",
                    ease: "power2.out",
                    
                },
                "-=.3"
            );

            setFirstLoad(false);
        }
    }, [firstLoad, t1Ref]);

    useEffect(() => {
        if (!containerRef.current) return;

        const t2 = gsap.timeline();
        if(firstLoad) return

        if (screenWidth === Screen.max) {
            t2.to(containerRef.current, {
                width: "100%",
                height: "92%",
                ease: "power3.in",
                borderRadius:"0",
                left: "50%",
                top: "0",
                transform: "translateX(-50%)",
            });
        } else if (screenWidth === Screen.min) {
            t2.to(containerRef.current, {
                width: id === "games" || "project" ?"80%" :"70%",
                height: "80%",
                ease: "power3.in",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                borderRadius:"12px",
            });
        }
    }, [screenWidth]);
};
