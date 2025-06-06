// template.tsx
'use client';
import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 2, bounce: 0 }}
    >
      {children}
    </motion.div>
  );
}