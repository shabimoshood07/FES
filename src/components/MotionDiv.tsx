"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const MotionDiv = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) => {
  const heading = useRef(null);
  const isInView = useInView(heading, { once: true });
  return (
    <motion.div
      ref={heading}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
      className={`${style} `}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
