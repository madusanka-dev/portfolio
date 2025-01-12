"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="header fixed top-0 w-full bg-[#ffffffad] rounded-[20px] z-[999]">
            <motion.div
                className="mx-5 relative"
                initial="hidden"
                whileInView="visible"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -70 },
                }}
                viewport={{ once: false }}
                animate={{
                    duration: 1,
                }}
                transition={{ type: "spring", stiffness: 100, delay: 1 }}
            >
                <nav className="flex items-center justify-between flex-wrap py-5">
                   
                    <div className="w-full lg:w-1/3 text-center lg:text-left">
                        <motion.a
                            href="#home"
                            className="logo arima text-[25px] font-[400] text-[#17242A]"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            madusanka<span className="text-[#E80B0B]">.</span>dev
                        </motion.a>
                    </div>

                    
                    <div className="block hidden">
                        <button
                            className="focus:outline-none"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <svg
                                className="w-8 h-8 text-[#17242A]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    
                    <div className="hidden md:block w-1/6">
                        <ul className="flex gap-5 justify-center flex-row inter text-[16px] font-[500]">
                            {/* <li><a href="#about">About</a></li>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#project">Projects</a></li> */}
                        </ul>
                    </div>

                    
                    <div className="hidden lg:block w-1/3 text-right">
                        <motion.div
                            className="inline-block"
                            whileTap={{ scale: 0.9 }}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a
                                href="#contact"
                                className="btn inter text-[16px] font-[500] rounded-[15px] text-[#FFFFFF] bg-[#17242A] px-8 py-3"
                            >
                                <span>Contact</span>
                            </a>
                        </motion.div>
                    </div>
                </nav>

                
                {menuOpen && (
                    <motion.div
                        className="md:hidden bg-white rounded-lg shadow-lg absolute w-full h-60"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        transition={{ duration: 0.3, type: "spring" }}
                    >
                        <ul className="flex flex-col gap-5 p-5 text-center inter text-[16px] font-[500]">
                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#process"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Process
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#project"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="btn inter text-[16px] font-[500] rounded-[15px] text-[#FFFFFF] bg-[#17242A] px-8 py-3"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}




export default Header