import { InView } from "react-intersection-observer";
import { setSectionInView } from "../redux/navReducer";
import { useDispatch } from "react-redux";
import data_portfolio from "../../assets/data-portfolio.json";
import DecorativeBorder from "../components/DecorativeBorder.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projectClasses from "./ProjectsSection.module.scss";
import ResponsiveImage from "../components/ResponsiveImage.jsx";
import sectionClasses from "../styles/shared/Sections.module.scss";
import SectionHeader from "../components/SectionHeader.jsx";

const ProjectsSection = () => {
  let projectsList = [];

  const dispatch = useDispatch();

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("projects"));
    }
  };

  data_portfolio.forEach((project) => {
    projectsList.push(<ProjectCard key={project.id} project={project} />);
  });

  return (
    <InView
      id="projects"
      as="section"
      className={`${sectionClasses["section"]} ${sectionClasses["section--projects"]}`}
      data-scroll-section
      onChange={isInView}
      threshold={0.25}
    >
      <DecorativeBorder location="top" />

      <div
        className={`${sectionClasses["section-width"]} ${sectionClasses["section-width--padding"]} ${sectionClasses["section-width--bordered-top"]} ${sectionClasses["section-width--bordered-bottom"]} ${projectClasses["projects"]}`}
      >
        <SectionHeader title="My recent projects" subtitle="My portfolio" />

        <div className={`${projectClasses["projects__cards-wrapper"]}`}>{projectsList}</div>

        {/* <a className="btn projects__cta" href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
          See more projects
        </a> */}
      </div>

      <div className={sectionClasses["section__bg-image-wrapper"]}>
        <ResponsiveImage
          className={sectionClasses["section__bg-image"]}
          code="v1629540939"
          public_id="about_cphruk"
          width="420"
          height="900"
        />
      </div>

      <DecorativeBorder location="bottom" />
    </InView>
  );
};

export default ProjectsSection;
