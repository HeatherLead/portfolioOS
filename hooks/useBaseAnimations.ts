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
        if (!containerRef.current) {
            throw new Error("Element with given id doesn't exist");
        }
    }, [id]);

    useGSAP(() => {
        if (!containerRef.current) return;
        const t1 = gsap.timeline();
        
        if (t1Ref.current === null) t1Ref.current = t1;

        if (firstLoad) {
            gsap.set(containerRef.current, {
                opacity: 0,
                bottom: 0,
                width: 2,
                height: 2,
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
                    width: id === "games" ?"80%" :"70%",
                    height:"80%",
                    ease: "power2.out",
                },
                "-=.3"
            );

            setFirstLoad(false);
        }
    }, [firstLoad, t1Ref]);

    useGSAP(() => {
        if (!containerRef.current) return;

        const t2 = gsap.timeline();
        if(firstLoad) return

        if (screenWidth === Screen.max) {
            t2.to(containerRef.current, {
                width: "98%",
                height: "96%",
                ease: "power3.in",
                left: "50%",
                top: "42%",
                transform: "translate(-50%, -50%)",
            });
        } else if (screenWidth === Screen.min) {
            t2.to(containerRef.current, {
                width: id === "games" ?"80%" :"70%",
                height: "80%",
                ease: "power3.in",
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
            });
        }
    }, [screenWidth]);
};
