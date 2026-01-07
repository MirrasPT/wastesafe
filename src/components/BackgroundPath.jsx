import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BackgroundPath = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const element = pathRef.current;
            const length = element.getTotalLength();

            // Hide the line initially
            gsap.set(element, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            // Animate the line
            gsap.to(element, {
                strokeDashoffset: 0,
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                },
                ease: "none"
            });
        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
            <svg
                className="w-full h-full"
                viewBox="0 0 1440 4000"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    ref={pathRef}
                    /* 
                       Adjusted Path for reduced horizontal lag at start:
                       - Starts at M 200 -100 (above viewport)
                       - Drops down quickly to C 200 200 (Hero)
                       - Then does the snake text
                    */
                    d="M 200 -100
                       C 200 100, 1350 400, 1350 1000 
                       C 1350 1600, 100 1900, 100 2500 
                       C 100 3100, 1350 3400, 1350 3800 
                       C 1350 3950, 720 3950, 720 4000"
                    stroke="#C9E26C"
                    strokeWidth="120"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-90"
                />
            </svg>
        </div>
    );
};

export default BackgroundPath;
