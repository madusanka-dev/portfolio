"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { TextFade } from '../utils/textFade';

import Image from "next/image"

import researchImage from "../assets/images/research.png";
import designImage from "../assets/images/design.png";
import developmentImage from "../assets/images/development.png";
import launchImage from "../assets/images/launch.png";



function Process() {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 50
    }
  };
  return (
    <section className="bg-[#17242A] rounded-[20px] mx-5 px-5" id="process">
      <div className="container">
        <div className="flex justify-center flex-wrap">
          <div className="w-11/12 text-center">
          <TextFade direction="up">
            <h3 className="inter text-[50px] md:text-[90px] leading-[60px] lg:leading-[100px] font-[800] text-white mb-[70px]">The Process</h3>
            </TextFade>
          </div>
        </div>

        <motion.div animate={inView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                ref={ref} className="flex justify-center flex-wrap">
          <div className="w-11/12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-[50px]">
              <div>
                <div className="flex flex-col items-center p-[30px] bg-white rounded-[20px] min-h-[380px] h-full">
                  <Image width={100} height={100} src={researchImage} alt="" />
                  <h4 className="inter text-[22px] font-[600] text-[#17242A] mt-[20px] mb-[15px] text-center">Planning & Research</h4>
                  <p className="arima text-[16px] font-[500] text-[#17242A] text-center">I start by understanding the projects goals and conducting research to create a solid plan, ensuring alignment with client objectives and the latest trends in web development.</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center p-[30px] bg-white rounded-[20px] min-h-[380px] h-full">
                  <Image width={100} height={100} src={designImage} alt="" />
                  <h4 className="inter text-[22px] font-[600] text-[#17242A] mt-[20px] mb-[15px] text-center">Design & Prototyping</h4>
                  <p className="arima text-[16px] font-[500] text-[#17242A] text-center">Once the plan is in place, I create wireframes and prototypes, focusing on responsive and user-centric designs using tools like Figma.</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center p-[30px] bg-white rounded-[20px] min-h-[380px] h-full">
                  <Image width={100} height={100} src={developmentImage} alt="" />
                  <h4 className="inter text-[22px] font-[600] text-[#17242A] mt-[20px] mb-[15px] text-center">Development & Testing</h4>
                  <p className="arima text-[16px] font-[500] text-[#17242A] text-center">With the design approved, I start coding the frontend using HTML, Javascript, CSS frameworks (Tailwind, Bootstrap), and ensuring cross-browser compatibility and performance optimization.</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center p-[30px] bg-white rounded-[20px] min-h-[380px] h-full">
                  <Image width={100} height={100} src={launchImage} alt="" />
                  <h4 className="inter text-[22px] font-[600] text-[#17242A] mt-[20px] mb-[15px] text-center">Launch & Support</h4>
                  <p className="arima text-[16px] font-[500] text-[#17242A] text-center">After rigorous testing, I deploy the application and offer ongoing support, ensuring the website remains updated and functional.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process