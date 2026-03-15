import React, { useEffect } from "react";
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
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t("meta.title");
  }, [t, i18n.language]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Team />
      <Partners />
      {/* <News /> */}
      {/* <Courses /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
