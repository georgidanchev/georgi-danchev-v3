import { InView } from "react-intersection-observer";
import { setSectionInView } from "../redux/navReducer";
import DecorativeBorder from "../components/DecorativeBorder.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projectClasses from "./ProjectsSection.module.scss";
import ResponsiveImage from "../components/ResponsiveImage.jsx";
import sectionClasses from "../styles/shared/Sections.module.scss";
import SectionTitle from "../components/SectionTitle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProjectsData } from "../redux/projectsReducer";

const ProjectsSection = () => {
  const projectsState = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjectsData());
  }, [dispatch]);

  const isInView = (inView) => {
    if (inView) {
      dispatch(setSectionInView("projects"));
    }
  };

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
        <SectionTitle title="My recent projects" subtitle="My portfolio" />

        <div className={`${projectClasses["projects__cards-wrapper"]}`}>
          {projectsState.loading && <p>Loading...</p>}

          {!projectsState.loading && projectsState.error ? <p>Error: {projectsState.error}</p> : null}

          {!projectsState.loading && projectsState.data
            ? projectsState.data.map((project) => <ProjectCard key={project.id} project={project} />)
            : null}
        </div>
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
