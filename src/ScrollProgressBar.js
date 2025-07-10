import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: 4,
        width: `${scroll}%`,
        background: 'linear-gradient(90deg, #1976d2, #00e6fb)',
        zIndex: 9999,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${scroll}%` }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    />
  );
};

export default ScrollProgressBar; 