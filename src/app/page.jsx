"use client";

import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./components/About";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import Slide from "./components/Slide";
import Contact from "./components/Contact";

export default function Home() {


  return (
    <>
      <Header/>
        <Hero />
        <About />
        <Process />
        <Slide/>
        {/* <Projects /> */}
        <Contact/>
        <Footer/>
    </>
  );


}