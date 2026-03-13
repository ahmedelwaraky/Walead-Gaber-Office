import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import HeroSection from "../component/HeroSection";
import Courses from "../component/Courses";
import Testimonials from "../component/Testimonials";
import Contact from "../component/Contact";
import News from "../component/News";
import Partners from "../component/Partners";
import Services from "../component/Services";
import About from "../component/About";
import Team from "../component/Team";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Partners />
      <Team />
      <News />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
