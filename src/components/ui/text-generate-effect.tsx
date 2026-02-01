"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [textSize, setTextSize] = useState("text-2xl");
  const [marginRight, setMarginRight] = useState("mr-40");
  const [marginLeft, setMarginLeft] = useState("ml-20");
  let wordsArray = words.split(" ");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTextSize("text-sm");
        setMarginRight("mr-12");
        setMarginLeft("ml-10");
      } else if (window.innerWidth < 768) {
        setTextSize("text-xl");
      } else {
        setTextSize("text-2xl");
        setMarginRight("mr-10");
      }
    };

    // Set initial size and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(`font-bold ${marginLeft} ${marginRight}`, className)}>
      <div>
        <div
          className={cn(
            `dark:text-white text-black leading-snug tracking-wide ${textSize}`
          )}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
