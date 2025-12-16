import { motion } from 'framer-motion';

export const FloatingBubbles = ({ count = 8, color = 'primary' }) => {
  const colors = {
    primary: 'bg-primary/10',
    accent: 'bg-accent/10',
    secondary: 'bg-secondary/10',
    pink: 'bg-pink-500/10',
    blue: 'bg-blue-500/10',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${colors[color]} backdrop-blur-sm`}
          style={{
            width: Math.random() * 80 + 40,
            height: Math.random() * 80 + 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const AmoebaBlob = ({ className = '', color = '#e63946', size = 300, duration = 20 }) => {
  return (
    <motion.div
      className={`absolute opacity-20 ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}, transparent)`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        borderRadius: [
          '30% 70% 70% 30% / 30% 30% 70% 70%',
          '70% 30% 30% 70% / 70% 70% 30% 30%',
          '50% 50% 50% 50% / 50% 50% 50% 50%',
          '30% 70% 70% 30% / 30% 30% 70% 70%',
        ],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export const GlowingOrbs = ({ count = 5 }) => {
  const colors = ['bg-primary', 'bg-accent', 'bg-pink-500', 'bg-blue-500', 'bg-purple-500'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 ${colors[i % colors.length]} rounded-full blur-sm`}
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export const WaveDivider = ({ flip = false, color = '#f9fafb' }) => {
  return (
    <div className={`absolute ${flip ? 'top-0 rotate-180' : 'bottom-0'} left-0 right-0 overflow-hidden`}>
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export const WaveDividerAlt = ({ flip = false, color = '#ffffff' }) => {
  return (
    <div className={`absolute ${flip ? 'top-0 rotate-180' : 'bottom-0'} left-0 right-0 overflow-hidden`}>
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,40 Q360,120 720,60 T1440,40 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export const BlobDivider = ({ flip = false, color = '#f9fafb' }) => {
  return (
    <div className={`absolute ${flip ? 'top-0 rotate-180' : 'bottom-0'} left-0 right-0 overflow-hidden`}>
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 C1350,110 1400,90 1440,80 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
};

export const AnimatedGradientOrb = ({ className = '' }) => {
  return (
    <motion.div
      className={`absolute w-96 h-96 rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        background: 'radial-gradient(circle, rgba(230,57,70,0.4) 0%, rgba(244,162,97,0.2) 50%, transparent 70%)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export const ParticleField = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default {
  FloatingBubbles,
  AmoebaBlob,
  GlowingOrbs,
  WaveDivider,
  WaveDividerAlt,
  BlobDivider,
  AnimatedGradientOrb,
  ParticleField,
};
