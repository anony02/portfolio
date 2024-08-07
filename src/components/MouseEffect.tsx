"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const getRainbowColor = () => {
  const colors = ["#FFFF00", "#00FFFF", "#FF00FF", "#FFFFFF"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function MouseEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const addSparkle = (e: MouseEvent) => {
      setSparkles([
        {
          id: uuidv4(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 5 + 5,
          color: getRainbowColor(),
        },
      ]);
    };

    window.addEventListener("mousemove", addSparkle);
    return () => window.removeEventListener("mousemove", addSparkle);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
      <AnimatePresence>
        {sparkles.map(({ id, x, y, size, color }) => (
          <motion.div
            key={id}
            initial={{ opacity: 1, x: 0, y: 0 }}
            animate={{ opacity: 0, x: 50, y: 50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: size,
              height: size,
              backgroundColor: color,
              clipPath:
                "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface MousePosition {
//   x: number;
//   y: number;
// }

// export default function MouseEffect() {
//   const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

//   const handleMouseMove = (event: MouseEvent) => {
//     setMousePosition({ x: event.clientX, y: event.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const gradient = `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 100%)`;

//   return (
//     <motion.div
//       className="mouse-effect"
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         pointerEvents: "none",
//         background: gradient,
//         zIndex: 1,
//         mixBlendMode: "difference",
//       }}
//     />
//   );
// }
