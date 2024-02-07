import { motion } from "framer-motion";
import React from "react";

type FadeInPropTypes = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
};

export const FadeIn = ({
  children,
  duration = 0.4,
  delay = 0,
}: FadeInPropTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};
