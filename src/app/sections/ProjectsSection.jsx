import { InView } from "react-intersection-observer";
import { setSectionInView } from "../redux/navReducer";
import { useDispatch } from "react-redux";
import DecorativeBorder from "../components/DecorativeBorder.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projectClasses from "./ProjectsSection.module.scss";
import ResponsiveImage from "../components/ResponsiveImage.jsx";
import sectionClasses from "../styles/shared/Sections.module.scss";
import SectionTitle from "../components/SectionTitle.jsx";
import useFetch, { getAllProjects } from "../hooks/useFetch";

const ProjectsSection = () => {
let projectsList = [];
  const { isFetching, error, fetchedData } = useFetch(getAllProjects, []);

  const dispatch = useDispatch();

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("projects"));
    }
  };

  fetchedData.forEach((project) => {
    projectsList.push(<ProjectCard key={project.id} project={project} />);
  });

  return (
    <InView
      threshold={0.5}
      id="projects"
      as="section"
      className={`${sectionClasses["section"]} ${sectionClasses["section--projects"]}`}
      data-scroll-section
      onChange={isInView}
    >
      <DecorativeBorder location="top" />

      <div
        className={`${sectionClasses["section-width"]} ${sectionClasses["section-width--padding"]} ${sectionClasses["section-width--bordered-top"]} ${sectionClasses["section-width--bordered-bottom"]} ${projectClasses["projects"]}`}
      >
        <SectionTitle
          title="My recent projects"
          subtitle="My portfolio"
          className="section-header--align-left-tablet-on"
        />

        <div className={`${projectClasses["projects__cards-wrapper"]}`}>{projectsList}</div>
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
