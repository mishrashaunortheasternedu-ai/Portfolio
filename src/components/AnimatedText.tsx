'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

type AnimationType = 'fadeIn' | 'slideIn' | 'typing';
type Direction = 'up' | 'down' | 'left' | 'right';

export interface AnimatedTextProps {
  text: string;
  animation?: AnimationType;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  tag?: keyof typeof motion;
  cursor?: boolean;
  repeat?: boolean;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const getSlideVariants = (direction: Direction = 'up') => {
  const distance = 40;
  switch (direction) {
    case 'down':
      return {
        hidden: { opacity: 0, y: -distance },
        visible: { opacity: 1, y: 0 },
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: -distance },
        visible: { opacity: 1, x: 0 },
      };
    case 'up':
    default:
      return {
        hidden: { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export default function AnimatedText({
  text,
  animation = 'fadeIn',
  className,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  tag = 'span',
  cursor = false,
  repeat = false,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = React.useState(
    animation === 'typing' ? '' : text,
  );

  React.useEffect(() => {
    if (animation !== 'typing') {
      setDisplayText(text);
      return;
    }

    let index = 0;
    let isActive = true;
    let nextTimeout: ReturnType<typeof setTimeout> | null = null;
    const typingSpeed = Math.max(duration, 0.05) * 1000;

    const type = () => {
      if (!isActive) return;
      index = index + 1;
      setDisplayText(text.slice(0, index));

      if (index >= text.length) {
        if (repeat) {
          index = 0;
          nextTimeout = setTimeout(type, typingSpeed);
        }
        return;
      }
      nextTimeout = setTimeout(type, typingSpeed);
    };

    const startTimeout = setTimeout(type, delay * 1000);

    return () => {
      isActive = false;
      clearTimeout(startTimeout);
      if (nextTimeout) {
        clearTimeout(nextTimeout);
      }
    };
  }, [animation, text, delay, duration, repeat]);

  const motionComponent =
    (motion[tag as keyof typeof motion] as React.ComponentType<
      MotionProps & { className?: string }
    >) ?? motion.span;

  if (animation === 'typing') {
    const TypingComponent = motionComponent;
    return (
      <TypingComponent
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.3 }}
      >
        <span className="whitespace-pre-wrap">{displayText}</span>
        {cursor && <span className="typing-caret">|</span>}
      </TypingComponent>
    );
  }

  const variants =
    animation === 'slideIn' ? getSlideVariants(direction) : defaultVariants;

  const MotionComponent = motionComponent;

  return (
    <MotionComponent
      className={className}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {displayText}
    </MotionComponent>
  );
}
