import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay }}
      className={`
        bg-black/50 border border-border p-6 
        hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)] 
        transition-all duration-300 relative overflow-hidden group
        ${className}
      `}
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      {children}
    </motion.div>
  );
}
