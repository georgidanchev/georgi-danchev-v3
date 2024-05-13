"use client";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Provider } from "react-redux"
import { useRef } from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSections.jsx";
import DotNavs from "./components/DotNavs"
import FooterSection from "./sections/FooterSection.jsx";
import HomeSection from "./sections/HomeSection";
import store from "./redux/store"
import WebsiteHeader from "./header/WebsiteHeader";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ speed: 3500, scrollFromAnywhere: true, multiplier: 1 }}
      containerRef={containerRef}
      watch={[]}
    >
      <Provider store={store}>
        <main data-scroll-container ref={containerRef}>
          <WebsiteHeader />
          <DotNavs />
          <HomeSection />
          <AboutSection />
          <ContactSection />
          <FooterSection />
        </main>
      </Provider>
    </LocomotiveScrollProvider>
  );
}
