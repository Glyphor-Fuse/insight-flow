import React from 'react';
import { motion } from 'framer-motion';

interface SignatureEffectProps {
  effect?: 'pulse' | 'glow' | 'none';
  children: React.ReactNode;
  className?: string;
}

export const SignatureEffect = ({ effect = 'none', children, className = '' }: SignatureEffectProps) => {
  if (effect === 'pulse') {
    return (
      <div className={`relative ${className}`}>
        <motion.div
          className="absolute inset-0 rounded-full bg-cyan-400/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return <div className={className}>{children}</div>;
};
