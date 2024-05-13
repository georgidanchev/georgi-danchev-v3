"use client";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Provider } from "react-redux";
import { useRef } from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSections.jsx";
import DotNavs from "./components/DotNavs";
import FooterSection from "./sections/FooterSection.jsx";
import HomeSection from "./sections/HomeSection";
import store from "./redux/store";
import WebsiteHeader from "./header/WebsiteHeader";
import BlogSection from "./sections/BlogSection.jsx"

function Home() {
  const containerRef = useRef(null);
  const locomotiveOptions = { speed: 3500, scrollFromAnywhere: true, multiplier: 1 };

  return (
    <LocomotiveScrollProvider
      options={locomotiveOptions}
      containerRef={containerRef}
      watch={[]}
    >
      <Provider store={store}>
        <main data-scroll-container ref={containerRef}>
          <WebsiteHeader />
          <DotNavs />
          <HomeSection />
          <AboutSection />
          <BlogSection />
          <ContactSection />
          <FooterSection />
        </main>
      </Provider>
    </LocomotiveScrollProvider>
  );
}

export default function HomeWrapper() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
