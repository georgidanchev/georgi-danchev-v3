"use client"

import DecorativeBorder from "../components/DecorativeBorder"
import ResponsiveImage from "../components/ResponsiveImage"
import DownArrow from "../components/DownArrow"
import classes from "./HomeSection.module.scss"

const Home = () => {
  return (
    <section id="home" className="section" data-scroll-section>
      <div
        className={`${classes["home-section"]} section-width section-width--padding animate__animated animate__zoomInDown`}
        data-scroll
        data-scroll-repeat="true"
        data-scroll-offset="50%,50%"
        data-scroll-call="home"
      >
        <h1 className={`${classes["home-section__title"]}`}>
          <span className={`${classes["home-section__title-inner"]} ${classes["home-section__title-inner--first"]}`}>
            Georgi Danchev
          </span>
          <span className={`${classes["home-section__title-spacer"]}`}>|</span>
          <span className={`${classes["home-section__title-inner"]} ${classes["home-section__title-inner--second"]}`}>
            Front End Developer
          </span>
        </h1>

        <p className={`${classes["home-section__text"]}`}>I code beautiful, simple and high quality websites</p>
      </div>

      <div className="section__bg-image-wrapper home">
        <ResponsiveImage
          image_class="section__bg-image"
          code="v1629540939"
          public_id="hero_rzr91t"
          alt="Laptop sitting on a desk"
          width="420"
          height="900"
        />
      </div>

      {/* <Particles id="tsparticles" options={particleConfig} init={particlesInit} /> */}

      <DownArrow />

      <DecorativeBorder location="bottom" />
    </section>
  )
}

export default Home
