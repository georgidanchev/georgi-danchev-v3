import ResponsiveImage from "../components/ResponsiveImage";
import SectionHeader from "../components/SectionHeader";
import AboutClasses from "./AboutSection.module.scss";
import SectionClasses from "../styles/shared/Sections.module.scss";
import StyledButton from "../components/StyledButton";
import { useDispatch } from "react-redux";
import { setSectionInView } from "../redux/navReducer";
import { InView } from "react-intersection-observer";

const About = () => {
  const dispatch = useDispatch();

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("about"));
    }
  };

  return (
    <InView
      id="about"
      as="section"
      onChange={isInView}
      threshold={0.5}
      className={`${SectionClasses["section"]} ${SectionClasses["section--about"]}`}
      data-scroll
      data-scroll-section
      data-scroll-repeat="true"
      data-scroll-offset="50%,50%"
      data-scroll-call="about"
    >
      <div className={`${SectionClasses["section-width"]} ${SectionClasses["section-width--padding"]}`}>
        <div
          className="animate__animated animate__hidden"
          data-scroll
          data-scroll-repeat="false"
          data-scroll-class="animate__fadeIn"
        >
          <SectionHeader title="Hello! My name is Georgi" />
          <div className={AboutClasses["about__top"]}>
            <div className={AboutClasses["about__image-wrapper"]}>
              <ResponsiveImage
                className={AboutClasses["about__image"]}
                code="v1629540939"
                public_id="me_olktte"
                width="264"
                height="264"
              />
            </div>
            <div className={AboutClasses["about__container"]}>
              <p className={AboutClasses["about__text"]}>
                I think about frontend development as a way to connect people from across the globe with immersive and
                intuitive experiences on the web. I have a passion for bringing each site from concept to completion as
                a hands-on technical leader focused on functionality and usability. This is what I do best and enjoy the
                most.
              </p>
              <StyledButton href="#contact" className={AboutClasses["about__link"]} data-scroll-to>
                Contact Me
              </StyledButton>
            </div>
            {/* <div className="about__bottom">
          <div className="about__skill-charts">
            <SkillChart percentage="90" />
            <SkillChart percentage="70" />
            <SkillChart percentage="60" />
            <SkillChart percentage="50" />
            <SkillChart percentage="50" />
            <SkillChart percentage="50" />
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default About;
