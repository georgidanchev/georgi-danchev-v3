import Copyright from "../components/Copyright.jsx";
import NameTitle from "../components/NameTitle.jsx";
import SocialLinks from "../header/SocialLinks.jsx";
import footerClasses from "./FooterSection.module.scss";
import sectionClasses from "../styles/shared/Sections.module.scss";

const Footer = () => {
  return (
    <div
      className={`animate__animated animate__hidden`}
      data-scroll
      data-scroll-section
      data-scroll-repeat="false"
      data-scroll-class="animate__fadeIn"
    >
      <div className={`${footerClasses["footer__inner"]} ${sectionClasses["section-width"]}`}>
        <Copyright className={footerClasses["copyright"]} />

        <NameTitle className="nameTitle--footer" />

        <SocialLinks className={footerClasses["socialLinks"]} />
      </div>
    </div>
  );
};

export default Footer;
