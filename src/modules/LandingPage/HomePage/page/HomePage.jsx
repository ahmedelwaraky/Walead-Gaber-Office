import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/About";

import Courses from "../component/Courses";
import Testimonials from "../component/Testimonials";
import Contact from "../component/Contact";
import News from "../component/News";
import Partners from "../component/Partners";
import Services from "../component/services";
import About from "../component/About";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Partners />
      <News />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
