"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const HomeSectionsHeading = ({
  text,
  style,
}: {
  text: string;
  style: string;
}) => {
  const heading = useRef(null);
  const isInView = useInView(heading, { once: true });
  return (
    <motion.h1
      ref={heading}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        border:"solid red"
      }}
      className={`section-heading  ${style} `}
    >
      {text}
    </motion.h1>
  );
};

export default HomeSectionsHeading;
