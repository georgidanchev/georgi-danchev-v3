import ResponsiveImage from "./ResponsiveImage";
import projectClasses from "./ProjectCard.module.scss";
import StyledButton from './StyledButton';
import Link from "next/link";

const ProjectCard = (props) => {
  const project = props.project;

  return (
    <Link scroll={false} href={`/?project-id=${project.id}`} className={projectClasses["project-card"]}>
      <div className={projectClasses["project-card__image-wrap"]}>
        <ResponsiveImage
          className={projectClasses["project-card__image"]}
          public_id="about_cphruk"
          code="v1629540939"
        />
      </div>
      <div className={projectClasses["project-card__content-wrap"]}>
        <h3 className={projectClasses["project-card__title"]}>{project.title}</h3>
        <p className={projectClasses["project-card__tags"]}>{project.tech_stack}</p>
      </div>
      <div className={projectClasses["project-card__overlay"]}>
        <h3 className={projectClasses["project-card__title"]}>{project.title}</h3>
        <p className={projectClasses["project-card__text"]}>{project.text}</p>
        {project.github_url !== "" && (
          <StyledButton href={project.github_url} className={projectClasses["project-card__link"]}>Read More</StyledButton>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
