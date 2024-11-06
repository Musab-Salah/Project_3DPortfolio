import type { Variants } from "framer-motion";

// Text animation with mobile adjustment for less delay
export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -30, // Reduce vertical distance for mobile smoothness
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8, // Reduced duration for mobile performance
        delay: delay,
      },
    },
  };
};

// General fadeIn animation with direction support
export const fadeIn = (
  direction: "up" | "down" | "left" | "right" = "up",
  type: "tween" | "spring" = "spring",
  delay = 0,
  duration = 0.5 // Shorter duration for faster mobile animations
): Variants => {
  const distance = 50; // Smaller for mobile

  return {
    hidden: {
      x:
        direction === "left" ? distance : direction === "right" ? -distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Zoom-in effect with optimized settings for mobile
export const zoomIn = (delay = 0, duration = 0.6) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Slide-in animation with optional direction and smoother transition
export const slideIn = (
  direction: "up" | "down" | "left" | "right",
  type: "tween" | "spring",
  delay = 0,
  duration = 0.6
) => {
  const distance = "100%";
  return {
    hidden: {
      x:
        direction === "left"
          ? `-${distance}`
          : direction === "right"
          ? distance
          : 0,
      y:
        direction === "up"
          ? distance
          : direction === "down"
          ? `-${distance}`
          : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

// Stagger container with adjusted timing for mobile smoothness
export const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};
