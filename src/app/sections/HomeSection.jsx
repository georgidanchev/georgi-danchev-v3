// import { useRef } from "react"
import DecorativeBorder from "../components/DecorativeBorder"
import DownArrow from "../components/DownArrow"
// import particleConfig from "../assets/particlesjs-config.json"
// import Particles from "react-tsparticles"
// import { loadFull } from "tsparticles"
// import { useCallback } from "react"
import ResponsiveImage from "../components/ResponsiveImage"
// import useIntersection from "../helpers/useIntersection"

const Home = () => {
  const {
    REACT_APP_FIRST_NAME,
    REACT_APP_LAST_NAME,
    REACT_APP_JOB_TITLE,
    REACT_APP_SITE_SUBTITLE,
  } = process.env

  // const home_ref = useRef()
  // useIntersection(home_ref, "home")

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine)
  // }, [])

  return (
    <section id="home" className="section section--hero" data-scroll-section>
      <div
        className="section-width section-width--padding home-section animate__animated animate__zoomInDown"
        data-scroll
        data-scroll-repeat="true"
        data-scroll-offset="50%,50%"
        data-scroll-call="home"
      >
        <h1 className="home-section__title">
          <span className="home-section__title-inner home-section__title-inner--first">
            {REACT_APP_FIRST_NAME} {REACT_APP_LAST_NAME}
          </span>
          <span className="home-section__title-spacer">|</span>
          <span className="home-section__title-inner home-section__title-inner--second">
            {REACT_APP_JOB_TITLE}
          </span>
        </h1>
        <p className="home-section__text">{REACT_APP_SITE_SUBTITLE}</p>
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
