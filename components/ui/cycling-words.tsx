"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface CyclingWordsProps {
  words: string[];
  className?: string;
  itemClassName?: string;
  reserveWord?: string;
  interval?: number;
  align?: "left" | "center";
}

function CyclingWords({
  words,
  className,
  itemClassName,
  reserveWord,
  interval = 2000,
  align = "left",
}: CyclingWordsProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const placeholder = reserveWord ?? words.reduce((a, b) => (a.length > b.length ? a : b), "");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTitleNumber((current) => (current === words.length - 1 ? 0 : current + 1));
    }, interval);

    return () => window.clearInterval(intervalId);
  }, [interval, words.length]);

  return (
    <span
      className={cn(
        "relative inline-flex h-[1.2em] items-center overflow-hidden align-[-0.08em]",
        align === "center" ? "justify-center text-center" : "justify-start text-left",
        className,
      )}
    >
      <span className={cn("invisible whitespace-nowrap px-[0.1em]", itemClassName)}>{placeholder}</span>
      {words.map((word, index) => (
        <motion.span
          key={word}
          className={cn(
            "absolute inset-0 flex items-center whitespace-nowrap px-[0.1em]",
            align === "center" ? "justify-center text-center" : "justify-start text-left",
            itemClassName,
          )}
          initial={{ opacity: 0, y: "-110%" }}
          transition={{ type: "spring", stiffness: 50 }}
          animate={
            titleNumber === index
              ? {
                  y: 0,
                  opacity: 1,
                }
              : {
                  y: titleNumber > index ? "-110%" : "110%",
                  opacity: 0,
                }
          }
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export { CyclingWords };
