'use client';
import Project from '../components/Project';
import { TextFade } from '../utils/textFade';
import { projects } from '../utils/data';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'

function Projects() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
    })
  
    useEffect( () => {
      const lenis = new Lenis()
  
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
  
      requestAnimationFrame(raf)
    })
  
    return (
        <section className="" id="project">
            <div className="container">
                 <div className="flex justify-center flex-wrap">
                    <div className="w-11/12 text-center">
                    <TextFade direction="up">
                        <h3 className="inter text-[60px] font-[800] text-[#17242A] mb-[50px]">Projects</h3>
                    </TextFade>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap">
                    <div className="w-8/12">
                        <div ref={container} className="relative">
                            {
                                projects.map( (project, i) => {
                                const targetScale = 1 - ( (projects.length - i) * 0.05);
                                return <Project key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects