"use client";

import { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
  children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -50 },
      }}
      transition={{ duration: 0.6 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
