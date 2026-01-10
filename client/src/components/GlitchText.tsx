import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <div className={`relative inline-block ${className} group`}>
      <motion.span
        className="relative z-10"
        whileHover={{
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 0],
          color: "#00ff00",
          textShadow: "2px 0 #ff0000, -2px 0 #0000ff",
          transition: { duration: 0.3 }
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
