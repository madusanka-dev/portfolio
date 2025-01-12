"use client";

import React from 'react'
import { motion, } from 'framer-motion';
import { TextFade } from '../utils/textFade';
import { useInView } from 'react-intersection-observer';

function Contact() {

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    }
  };

  return (
    <section className="bg-[#17242A] rounded-[20px] mx-5 px-5" id="contact">
      <div className="container">
        <div className="flex justify-center flex-wrap">
          <div className="w-11/12 text-center">
            <TextFade direction="up">
              <h3 className="inter text-[50px] md:text-[160px] font-[800] text-white mb-[20px]">Get in Touch</h3>
            </TextFade>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap">
            <motion.a animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            ref={ref} whileTap={{ scale: 0.9 }} initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }} href="mailto:madujayasooriya93@gmail.com" className='inter font-[500] text-[20px] flex items-center justify-center w-[150px] h-[150px] border rounded-[100%] shadow-2xl text-white border-white p-[30px]'>CONTACT</motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact