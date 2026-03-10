import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/servicesSection";
import PartnersSection from "../component/PartnersSection";
import NewsSection from "../component/NewsSection";
import CoursesSection from "../component/Coursessection";
import TestimonialsSection from "../component/Testimonialssection";
import ContactSection from "../component/Contactsection";
import Footer from "../../../../components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <PartnersSection/> */}
      <NewsSection />
      <CoursesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
