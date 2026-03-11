import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/servicesSection";
import PartnersSection from "../component/PartnersSection";
import NewsSection from "../component/NewsSection";
import TestimonialsSection from "../component/Testimonialssection";
import Footer from "../../../../components/layout/Footer";
import CoursesSection from "../component/CoursesSection";
import ContactSection from "../component/ContactSection";
import TestimonialsSection from "../component/Testimonialssection";

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
