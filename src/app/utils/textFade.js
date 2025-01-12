"use client"
import { motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import React from "react"


export function TextFade({
  direction,
  children,
  className = "",
  staggerChildren = 0.1
}) {
  const FADE_DOWN = {
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 }
  }

  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren
          }
        }
      }}
      className={className}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child) ? (
          <motion.div variants={FADE_DOWN}>{child}</motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  )
}
