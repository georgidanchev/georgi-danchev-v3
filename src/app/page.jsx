"use client";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { Provider } from "react-redux";
import { Suspense, useRef } from "react";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSections.jsx";
import DotNavs from "./components/DotNavs";
import FooterSection from "./sections/FooterSection.jsx";
import HomeSection from "./sections/HomeSection";
import store from "./redux/store";
import Header from "./sections/Header.jsx";
import BlogSection from "./sections/BlogSection.jsx";
import ProjectsSection from "./sections/ProjectsSection";
import DaisyModal from "./components/DaisyModal.jsx";


function Home() {
  const containerRef = useRef(null);
  const locomotiveOptions = { speed: 3500, scrollFromAnywhere: true, multiplier: 1 };


  return (
    <LocomotiveScrollProvider options={locomotiveOptions} containerRef={containerRef} watch={[]}>
      <main data-scroll-container ref={containerRef}>
        <Header />
        <DotNavs />
        <Suspense>
          <DaisyModal />
        </Suspense>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <FooterSection />
      </main>
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
