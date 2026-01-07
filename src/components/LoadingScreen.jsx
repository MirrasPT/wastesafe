import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const paths = svgRef.current.querySelectorAll('path');

            paths.forEach((path, i) => {
                const length = path.getTotalLength();

                // Reset
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    opacity: 1
                });

                // Animate: "Draw" lines randomly
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2.5 + Math.random() * 2,
                    ease: "power1.inOut",
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: 0.5,
                    delay: i * 0.3
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-zinc-50 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Drawing Lines */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <svg ref={svgRef} className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
                    {/* Random Wavy Paths acting as if they are "writing" */}
                    <path
                        d="M -100 200 Q 400 500 800 200 T 1600 400"
                        fill="none" stroke="#355130" strokeWidth="60"
                    />
                    <path
                        d="M -100 800 Q 400 400 900 700 T 1600 300"
                        fill="none" stroke="#C9E26C" strokeWidth="80"
                    />
                    <path
                        d="M 1600 100 Q 1100 500 600 200 T -100 600"
                        fill="none" stroke="#355130" strokeWidth="40"
                    />
                    <path
                        d="M 300 -100 Q 500 400 200 800 T 600 1200"
                        fill="none" stroke="#355130" strokeWidth="50"
                    />
                    <path
                        d="M 1200 -100 Q 900 400 1300 800 T 1000 1200"
                        fill="none" stroke="#C9E26C" strokeWidth="70"
                    />
                    <path
                        d="M 0 450 C 300 300, 700 600, 1440 200"
                        fill="none" stroke="#355130" strokeWidth="45"
                    />
                </svg>
            </div>

            {/* Centered Logo & Text */}
            <div className="relative z-10 flex flex-col items-center animate-pulse">
                <img
                    src="/imagens/loading.gif"
                    alt="Loading WasteSafe"
                    className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4"
                />
                <h2 className="text-[#355130] text-xl md:text-2xl font-bold tracking-wide flex items-center gap-1">
                    A carregar novo stock
                    <span className="flex gap-1 dot-loader">
                        <span className="animate-bounce delay-0">.</span>
                        <span className="animate-bounce delay-100">.</span>
                        <span className="animate-bounce delay-200">.</span>
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default LoadingScreen;
