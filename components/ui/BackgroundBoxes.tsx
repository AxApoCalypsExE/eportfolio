"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const gradients = {
  red: ["#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c"],
  orange: ["#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
  yellow: ["#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"],
  green: ["#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
  blue: ["#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"],
  indigo: ["#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e"],
  violet: ["#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
} as const;

type GradientKey = keyof typeof gradients;

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  
  const gradientKeys = Object.keys(gradients) as GradientKey[];
  const selectedGradient = gradients[gradientKeys[Math.floor(Math.random() * gradientKeys.length)]];

  const getRandomShade = () => {
    return selectedGradient[Math.floor(Math.random() * selectedGradient.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8  border-l  border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomShade(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8  border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
