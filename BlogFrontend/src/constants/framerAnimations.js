import { animate, delay, motion } from "framer-motion";

// WHILE_IN_VIEW
const fadeUp = ({ duration = 0.4, delay = 0.1 }) => {
  return {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration, delay } },
  };
};

const fadeBottom = ({ duration = 0.4, delay = 0.1 }) => {
  return {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0, transition: { duration, delay } },
  };
};

const fadeRight = ({ duration = 0.4, delay = 0.1 }) => {
  return {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0, transition: { duration, delay } },
  };
};

const fadeLeft = ({ duration = 0.4, delay = 0.1 }) => {
  return {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0, transition: { duration, delay } },
  };
};

const zoomIn = ({ duration = 0.4, delay = 0.1 } = {}) => ({
  initial: { scale: 0.8, opacity: 0 },
  whileInView: { scale: 1, opacity: 1, transition: { duration, delay } },
});

const rotateIn = ({ duration = 0.4, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, rotate: -90 },
  whileInView: { opacity: 1, rotate: 0, transition: { duration, delay } },
});

const toggleY = ({
  translate = 10,
  rotate = 12,
  duration = 2,
  delay = 0.1,
  ease = "easeInOut",
}) => {
  return {
    animate: {
      y: [-translate, translate],
      rotate: [-rotate, rotate],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: duration,
        delay: delay,
        ease: ease,
      },
    },
  };
};

// Slide and Scale Animation
const slideAndScale = ({ duration = 0.8, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, x: 100, scale: 0.8 },
  whileInView: { opacity: 1, x: 0, scale: 1 },
  transition: { duration, delay, ease: "easeOut" },
});

// Spin In Animation
const spinIn = ({ duration = 1, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, rotate: -180 },
  whileInView: { opacity: 1, rotate: 0 },
  transition: { duration, delay, ease: "easeInOut" },
});

const apearWithRotate = ({
  axis = 50,
  rotate = 45,
  duration = 0.4,
  delay = 0.1,
} = {}) => ({
  initial: {
    y: -axis,
    x: -axis,
    rotate: rotate,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: duration, delay: delay },
  },
});

// Bounce In Animation
const bounceIn = ({ duration = 0.6, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, y: -100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
      type: "spring", // Adds bounce effect
      stiffness: 100,
    },
  },
});

// Bounce Out Animation
const bounceOut = ({ duration = 0.6, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
      type: "spring", // Adds bounce effect
      stiffness: 100,
    },
  },
});

// Bounce In Animation
const bounceRight = ({ duration = 0.6, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, x: -100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
      type: "spring", // Adds bounce effect
      stiffness: 100,
    },
  },
});

// Bounce In Animation
const bounceLeft = ({ duration = 0.6, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, x: 100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
      type: "spring", // Adds bounce effect
      stiffness: 100,
    },
  },
});

// Pulse In Animation
const pulseIn = ({ duration = 0.6, delay = 0.1 } = {}) => ({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: {
    duration,
    delay,
    ease: "easeInOut",
    type: "spring", // Creates a pulsing effect
    stiffness: 120,
  },
});

const waving = ({ duration = 1, rotate = 5, repeat = Infinity } = {}) => ({
  animate: {
    rotate: [0, rotate, -rotate, rotate, 0], // Waving motion back and forth
    transition: {
      duration, // How long the full wave takes
      repeat, // Infinite looping
      ease: "easeInOut", // Smooth motion
    },
  },
});

const emphasizeScale = ({
  duration = 0.6,
  delay = 0.1,
  scaleAmount = 1.1,
} = {}) => ({
  whileHover: {
    scale: scaleAmount, // How much the element will grow
    transition: {
      duration, // How long the scaling takes
      delay, // Optional delay before scaling starts
      ease: "easeInOut", // Smooth scaling in and out
    },
  },
  whileTap: {
    scale: scaleAmount - 0.1, // Slightly smaller scale when tapped
    transition: { duration: 0.3 }, // Faster response on tap
  },
});

// WHILE_HOVER
const btnRotate = ({
  duration = 0.4,
  delay = 0.1,
  scaleOut = 1.05,
  scaleIn = 0.95,
  rotate = 2.5,
}) => {
  return {
    whileHover: { scale: scaleOut },
    whileTap: {
      scale: scaleIn,
      rotate: rotate,
      transition: { duration, delay },
    },
  };
};

const hoverShadow = ({ duration = 0.4, shadowSize = 10 } = {}) => ({
  whileHover: {
    boxShadow: `0px ${shadowSize}px ${shadowSize * 2}px rgba(0, 0, 0, 0.15)`,
  },
  transition: { duration },
});

const hoverBg = ({ duration = 0.4, bg = "rgba(0,0,0,0.1)" } = {}) => ({
  whileHover: {
    backgroundColor: bg,
    transition: { duration },
  },
});

// Default export with all animations
const frAnimations = {
  fadeUp,
  fadeBottom,
  fadeRight,
  fadeLeft,
  btnRotate,
  zoomIn,
  rotateIn,
  hoverShadow,
  toggleY,
  waving,
  emphasizeScale,
  slideAndScale,
  spinIn,
  bounceIn,
  bounceOut,
  bounceRight,
  bounceLeft,
  pulseIn,
  apearWithRotate,
  hoverBg,
};

export { motion };
export default frAnimations;
