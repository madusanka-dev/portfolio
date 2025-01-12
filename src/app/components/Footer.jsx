"use client";

import React from 'react'

import { motion } from "framer-motion";

function footer() {
  let currentYear = new Date().getFullYear()
  return (
    <motion.div className="footer" initial="hidden"
    whileInView="visible"
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 70 }
    }}
    viewport={{ once: false }}
      animate={{
        duration: 1,
      }}
      transition={{ type: "spring", stiffness: 100 }}>
      <div className="mx-3 lg:mx-5">
        <div className="flex items-center justify-between md:justify-between flex-wrap py-5">
          <div className="md:w-2/6 lg:w-1/6"><span className="text-[13px] text-[#828282] font-[400]">{currentYear} © Edition | All Rights Recived</span></div>
          <div className="md:w-2/6 lg:w-1/6 md:text-right">
            <ul className="flex gap-5 justify-center md:justify-end flex-column text-[#828282] inter text-[13px] font-[400]">
              <li><motion.a href="https://www.linkedin.com/company/madusankadev" target='_blank' whileHover={{ color: '#000'}}>Linkedin</motion.a></li>
              <li><motion.a href="https://www.facebook.com/profile.php?id=61555084323941" target='_blank' whileHover={{ color: '#000'}}>Facebook</motion.a></li>
              {/* <li><motion.a href="" whileHover={{ color: '#000'}}>Instagram</motion.a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 

export default footer