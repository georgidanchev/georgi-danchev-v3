"use client";

import WebsiteHeader from "./header/WebsiteHeader";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSections.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ speed: 3500, scrollFromAnywhere: true, multiplier: 1 }}
      containerRef={containerRef}
      watch={[]}
    >
      <main data-scroll-container ref={containerRef}>
        <WebsiteHeader />
        <HomeSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </main>
    </LocomotiveScrollProvider>
  );
}
