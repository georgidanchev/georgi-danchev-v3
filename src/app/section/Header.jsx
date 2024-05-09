import NameTitle from "../components/NameTitle"
import MobileBtn from "../components/MobileBtn"
import MobileNav from "../components/MobileNav"
import SocialLinks from '../components/SocialLinks';

import classes from "./Header.module.scss"

const { REACT_APP_LINKEDIN, REACT_APP_GITHUB } = process.env

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={`${classes["header__container"]} section-width animate__animated animate__fadeIn animate__delay-1s`}>
        <NameTitle />
        <div className={classes["header__inner"]}>
          <SocialLinks />
          <MobileBtn />
        </div>
      </div>
      {/* <MobileNav /> */}
    </header>
  )
}

export default Header
