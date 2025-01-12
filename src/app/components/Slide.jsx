'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="tech overflow-hidden" id="tech">
      <div ref={container}>
        <Slide direction={'right'} progress={scrollYProgress} />
        <Slide direction={'left'} progress={scrollYProgress} />
        <Slide direction={'right'} progress={scrollYProgress} />
      </div>
    </section>
  );
}

const Slide = (props) => {
  const direction = props.direction === 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction]);

  return (
    <motion.div
      style={{ x: translateX }}
      className="relative flex whitespace-nowrap">
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="arima text-[30px] md:text-[50px] lg:text-[70px] font-[600]">a Passionate Frontend Developer</p>
    </div>
  );
};
