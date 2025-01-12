"use client";

import React from 'react'  
import { motion } from "framer-motion";



function Hero() {

  return (
    <motion.section className="hero-section bg-[#17242A] mt-[78px] py-[100px] lg:py-[0] rounded-[20px] mx-5" initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 2,
        ease: [0, 0.71, 0.2, 1.01]
      }} id="home">
      <div className="container">
          <div className="lg:min-h-screen flex items-center justify-center flex-wrap">
            <motion.div className="w-3/4 text-center" initial={{
              opacity: 0,
              y: 50
            }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 3,
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}>
              <div className="top-title arima text-[30px] md:text-[40px] lg:text-[50px] font-[600] text-white">a Passionate</div>
              <div className="main-title inter text-[50px] md:text-[100px] lg:text-[200px] font-[900] leading-[60px] md:leading-[100px] lg:leading-[200px] mb-[60px] text-white">Frontend Developer</div>
              <div className="bottom-title arima text-[20px] md:text-[35px] lg:text-[38px] font-[600] leading-[30px] md:leading-[50px] text-white">Creating modern, responsive, and user-friendly web<br></br> applications with a focus on performance and design.</div>
            </motion.div>
          </div>
      </div>
    </motion.section>
  )
}

export default Hero