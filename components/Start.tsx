"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { BackgroundBeamsWithCollision } from "./ui/BgBeams";
import { TextHoverEffect } from "./ui/TextHover";
import { Button } from "./ui/MovingBorders";
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgSpinner, CgSpinnerAlt, CgSpinnerTwo } from "react-icons/cg";

interface StartProps {
  onAnimationComplete: () => void;
}

const Start: React.FC<StartProps> = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const startRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleEnterClick = () => {
    if (startRef.current) {
      gsap.to(startRef.current, {
        opacity: 0,
        scale: 3,
        duration: 1.5,
        ease: "power3.out",
        onComplete: () => {
          setIsVisible(false);
          onAnimationComplete();
        },
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={startRef}
      className="relative top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-black"
    >
      <BackgroundBeamsWithCollision>
        <div className="absolute top-32 md:top-36 left-1/2 transform -translate-x-1/2 text-center z-[51] text-xl md:text-2xl lg:text-3xl tracking-widest uppercase font-bold">
          Welcome to Ace Correa&apos;s Portfolio
        </div>

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[25rem] w-full z-50 md:h-[50rem]">
          <TextHoverEffect text="ACE" />
        </div>

        <div className="hover:-translate-y-2 md:hover:-translate-y-3 transition-transform absolute bottom-32 md:bottom-36 left-1/2 transform -translate-x-1/2 text-center z-[51] ease-in-out">
          <Button
            borderRadius="1.75rem"
            onClick={handleEnterClick}
            disabled={isLoading}
          >
            <div className="px-6 py-3 md:px-10 md:py-5 flex justify-between items-center gap-2 text-3xl md:text-5xl font-semibold">
              {isLoading ? (
                <>
                  <CgSpinnerAlt className="animate-spin mx-10"/>
                </>
              ) : (
                <>
                  Enter <FaLongArrowAltRight />
                </>
              )}
            </div>
          </Button>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Start;
