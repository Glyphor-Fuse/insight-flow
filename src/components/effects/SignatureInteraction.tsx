import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { wrap } from '@motionone/utils';

interface SignatureInteractionProps {
  type: 'text-reveal' | 'clip-reveal' | 'parallax' | 'marquee' | 'sticky-progress' | 'hover';
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction = ({ type, children, className = '', speed = 5 }: SignatureInteractionProps) => {
  
  // Marquee Implementation
  if (type === 'marquee') {
    return (
      <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
        <MarqueeContent speed={speed}>{children}</MarqueeContent>
      </div>
    );
  }

  // Parallax Implementation
  if (type === 'parallax') {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    
    return (
      <div ref={ref} className={`relative overflow-hidden ${className}`}>
        <motion.div style={{ y }} className="w-full h-full">
          {children}
        </motion.div>
      </div>
    );
  }

  // Hover Implementation
  if (type === 'hover') {
    return (
      <motion.div
        className={className}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};

// Helper for Marquee
function MarqueeContent({ children, speed }: { children: React.ReactNode; speed: number }) {
  const baseVelocity = -speed;
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useSpring(scrollY, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], { clamp: false });

  const xInput = useRef(0);
  
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    // Optional: Change direction based on scroll
    // if (velocityFactor.get() < 0) directionFactor.current = -1;
    // else if (velocityFactor.get() > 0) directionFactor.current = 1;
    
    moveBy += moveBy * velocityFactor.get();
    xInput.current += moveBy;
    // Wrap logic would go here for infinite loop, simplified for this demo to just translate
    // For a true infinite marquee in React without width measurement, we often duplicate content
  });

  // Simple infinite scroll using CSS animation is often smoother for simple tickers,
  // but here is a Framer Motion approach for the requested "SignatureInteraction".
  // To ensure it loops perfectly without complex measurement, we will use a simpler animation approach:
  
  return (
    <motion.div
      className="flex"
      animate={{ x: [0, -1000] }}
      transition={{ 
        x: { 
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 20, 
          ease: "linear" 
        }
      }}
    >
      {children}
      {children}
      {children}
      {children}
    </motion.div>
  );
}
