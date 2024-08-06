"use client";

import React from "react";
import { useEffect, useState } from "react";

interface TypingProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function Typing({ text, speed = 100, delay = 3000 }: TypingProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const lines = text.split("\\n");
    if (lineIndex < lines.length && isTyping) {
      if (charIndex < lines[lineIndex].length) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => {
            const newText = [...prev];
            if (!newText[lineIndex]) newText[lineIndex] = "";
            newText[lineIndex] += lines[lineIndex][charIndex];
            return newText;
          });
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else if (charIndex >= lines[lineIndex].length) {
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    } else if (lineIndex >= lines.length && isTyping) {
      setIsTyping(false);
    }
  }, [lineIndex, charIndex, text, speed, isTyping]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText([]);
        setLineIndex(0);
        setCharIndex(0);
        setIsTyping(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, delay]);

  return (
    <div className="flex flex-col items-start text-xl">
      {displayedText.map((line, index) => (
        <p key={index} className="relative">
          {line}
          {index === displayedText.length - 1 && (
            <span className="inline-block w-[2px] h-[1.75rem] align-bottom bg-black dark:bg-white animate-blink" />
          )}
        </p>
      ))}
    </div>
  );
}
