import type { Transition, Variants } from "framer-motion";

type FadeTiming = {
  delay?: number;
  duration?: number;
  ease?: Transition["ease"];
  distance?: number;
  staggerChildren?: number;
  delayChildren?: number;
  when?: Transition["when"];
};

type FadeDirection = "up" | "down" | "left" | "right";

const getAxis = (direction: FadeDirection): "x" | "y" =>
  direction === "left" || direction === "right" ? "x" : "y";

const getOffset = (direction: FadeDirection, distance: number) => {
  if (direction === "up" || direction === "left") {
    return distance;
  }

  return -distance;
};

export const fadeInFrom = (
  direction: FadeDirection = "up",
  options: FadeTiming = {}
): Variants => {
  const {
    delay = 0,
    duration = 0.5,
    ease = [0.4, 0, 0.2, 1],
    distance = 20,
    staggerChildren,
    delayChildren,
    when,
  } = options;

  const axis = getAxis(direction);
  const transitionDelay = Math.max(0, Math.min(delay ?? 0, 0.1));
  const transitionDuration = Math.max(0.25, Math.min(duration ?? 0.5, 0.6));
  const offset = getOffset(direction, Math.min(Math.abs(distance ?? 20), 28));

  const hiddenState: Record<string, number> & { opacity: number } = {
    opacity: 0,
    [axis]: offset,
  } as Record<string, number> & { opacity: number };

  const visibleState: Record<string, number> & { opacity: number } = {
    opacity: 1,
    [axis]: 0,
  } as Record<string, number> & { opacity: number };

  const transition: Transition = {
    delay: transitionDelay,
    duration: transitionDuration,
    ease,
  };

  if (typeof staggerChildren === "number") {
    transition.staggerChildren = staggerChildren;
  }

  if (typeof delayChildren === "number") {
    transition.delayChildren = delayChildren;
  }

  if (when) {
    transition.when = when;
  }

  return {
    hidden: hiddenState,
    visible: {
      ...visibleState,
      transition,
    },
  };
};

export const fadeInUp = (
  delay = 0,
  durationOrOptions?: number | FadeTiming
): Variants => {
  const options: FadeTiming =
    typeof durationOrOptions === "number"
      ? { duration: durationOrOptions }
      : durationOrOptions ?? {};

  return fadeInFrom("up", { delay: Math.min(delay, 0.08), ...options });
};

export const fadeIn = (
  delay = 0,
  duration = 0.5,
  ease: Transition["ease"] = [0.4, 0, 0.2, 1]
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: Math.max(0, Math.min(delay, 0.1)),
      duration: Math.max(0.25, Math.min(duration, 0.6)),
      ease,
    },
  },
});

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

export const scaleIn = (
  delay = 0,
  duration = 0.5,
  ease: Transition["ease"] = [0.4, 0, 0.2, 1]
): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: Math.max(0, Math.min(delay, 0.1)),
      duration: Math.max(0.25, Math.min(duration, 0.55)),
      ease,
    },
  },
});

type StaggerConfig =
  | number
  | {
      stagger?: number;
      delayChildren?: number;
      staggerDirection?: -1 | 1;
    };

export const staggerChildren = (
  config: StaggerConfig = {},
  legacyDelayChildren?: number
): Variants => {
  if (typeof config === "number") {
    return {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: config,
          ...(typeof legacyDelayChildren === "number"
            ? { delayChildren: legacyDelayChildren }
            : {}),
        },
      },
    };
  }

  const {
    stagger = 0.08,
    delayChildren = 0.05,
    staggerDirection,
  } = config;

  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
        ...(typeof staggerDirection === "number"
          ? { staggerDirection }
          : {}),
      },
    },
  };
};

export const sectionReveal = (options: FadeTiming = {}): Variants => {
  const {
    delay = 0,
    duration = 0.55,
    ease = [0.4, 0, 0.2, 1],
    distance = 20,
    staggerChildren = 0.08,
    delayChildren = 0.05,
    when = "beforeChildren",
  } = options;

  return fadeInFrom("up", {
    delay,
    duration,
    ease,
    distance,
    staggerChildren,
    delayChildren,
    when,
  });
};

export const viewportSettings = { once: true, amount: 0.15 } as const;
