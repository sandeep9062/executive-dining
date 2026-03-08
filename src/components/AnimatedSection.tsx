import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "fade-up" | "fade-in" | "slide-left" | "scale-in";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  threshold?: number;
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  threshold = 0.15,
}: AnimatedSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  // If the user prefers reduced motion, we strip the movement and just fade
  const animation = shouldReduceMotion
    ? variants["fade-in"]
    : variants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.9,
        delay,
        // This cubic-bezier creates a "premium" deceleration effect
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
