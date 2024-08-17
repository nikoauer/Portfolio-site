import { useState, useEffect } from "react";

export default function SlidingText() {
    const titles = ["Full Stack Developer", "Python Developer", "Niko Auer"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
                setFade(true);
            }, 500); 
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium">
                <span className="relative h-[1em] w-48 overflow-hidden">
                    <span
                        className={`absolute h-full w-full leading-none text-indigo-600 transition-opacity duration-500 ${
                            fade ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {titles[currentTitleIndex]}
                    </span>
                </span>
            </h1>
        </div>
    );
}
