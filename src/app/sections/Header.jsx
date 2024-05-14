import MobileBtn from "../components/MobileBtn";
import MobileNav from "../components/MobileNav";
import SocialLinks from "../components/SocialLinks";
import NameTitle from "../components/NameTitle.jsx";
import classes from "./Header.module.scss";
import sectClasses from "../styles/shared/Sections.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div
        className={`${classes["header__container"]} ${sectClasses["section-width"]} animate__animated animate__fadeIn animate__delay-1s`}
      >
        <NameTitle className="nameTitle--header" />
        <div className={classes["header__inner"]}>
          <SocialLinks />
          <MobileBtn />
        </div>
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
