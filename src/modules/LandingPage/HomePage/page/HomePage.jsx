import React from "react";
import Navbar from "../../../../components/layout/Navbar";
import HeroSection from "../component/HeroSection";
import AboutSection from "../component/AboutSection";
import ServicesSection from "../component/servicesSection";
import NewsSection from "../component/NewsSection";
import Footer from "../../../../components/layout/Footer";
import ContactSection from "../component/ContactSection";
import  TestimonialsSection from "../component/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
