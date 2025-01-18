"use client";

import { motion } from 'framer-motion';
import { TextFade } from '../utils/textFade';

function About() {


  return (
    <section className="about" id="about">
      <div className="container">
        <div className="flex justify-center flex-wrap">
          <div className="w-11/12 lg:w-3/4 text-center">
            <TextFade direction="up">
            <h3 className="inter text-[50px] md:text-[90px] font-[800] text-[#17242A] mb-[30px]">About Me</h3>
            <p className="arima text-[25px] md:text-[40px] font-[600] leading-[35px] md:leading-[50px] text-[#17242A]">
            Hello, I’m Madusanka Jayasooriya, a passionate frontend developer with a deep understanding of HTML, CSS, JavaScript, HTML, Wordpress and React. I have a strong focus on creating clean, responsive designs and building applications that provide a seamless user experience. With 5 years of experience working in fast-paced environments, I bring creativity and technical expertise to every project I take on.
            </p>
            </TextFade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
