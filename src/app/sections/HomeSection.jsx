"use client";

import DecorativeBorder from "../components/DecorativeBorder";
import ResponsiveImage from "../components/ResponsiveImage";
import DownArrowLink from "../components/DownArrowLink";
import { setSectionInView } from "../redux/navReducer"
import homeClasses from "./HomeSection.module.scss";
import sectClasses from "../styles/shared/Sections.module.scss";
import { InView } from "react-intersection-observer";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch()

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("home"))
    }
  };

  return (
    <InView threshold={0.5} as="section" id="home" className={sectClasses["section"]} onChange={isInView} data-scroll-section>
      <div
        className={`${homeClasses["home-section"]} ${sectClasses["section-width"]} ${sectClasses["section-width--padding"]} animate__animated animate__zoomInDown`}
        data-scroll
        data-scroll-repeat="true"
        data-scroll-offset="50%,50%"
        data-scroll-call="home"
      >
        <h1 className={`${homeClasses["home-section__title"]}`}>
          <span
            className={`${homeClasses["home-section__title-inner"]} ${homeClasses["home-section__title-inner--first"]}`}
          >
            Georgi Danchev
          </span>
          <span className={`${homeClasses["home-section__title-spacer"]}`}>|</span>
          <span
            className={`${homeClasses["home-section__title-inner"]} ${homeClasses["home-section__title-inner--second"]}`}
          >
            Front End Developer
          </span>
        </h1>

        <p className={`${homeClasses["home-section__text"]}`}>I code beautiful, simple and high quality websites</p>
      </div>

      <div className={`${sectClasses["section__bg-image-wrapper"]} ${sectClasses["section__bg-image-wrapper--home"]}`}>
        <ResponsiveImage
          className={sectClasses["section__bg-image"]}
          code="v1629540939"
          public_id="hero_rzr91t"
          alt="Laptop sitting on a desk"
          width="420"
          height="900"
        />
      </div>

      {/* <Particles id="tsparticles" options={particleConfig} init={particlesInit} /> */}

      <DownArrowLink />

      <DecorativeBorder location="bottom" />
    </InView>
  );
};

export default Home;
