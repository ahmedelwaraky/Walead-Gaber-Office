import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/servicesSection";
import PartnersSection from "../component/PartnersSection";
import NewsSection from "../component/NewsSection";
import Courses from "../component/Courses";
import Testimonials from "../component/Testimonials";
import Contact from "../component/Contact";



export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <NewsSection />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
