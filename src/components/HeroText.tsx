"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.03 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      //   x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: [20, -200],
      //   x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        fontSize: "2rem",
        flexWrap: "wrap",
        fontWeight: "bold",
        padding: "10px",
        maxWidth: "1024px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{
            marginRight: "6px",
            letterSpacing: "-.9px",
          }}
          key={index}
          className="hero-text"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default HeroText;
