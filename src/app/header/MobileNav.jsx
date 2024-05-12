"use client";

// import { closeMenu } from "../redux/menuReducer"
// import { setCurrentSection } from "../redux/navReducer"
// import { useSelector, useDispatch } from "react-redux"

import classes from "./MobileNav.module.scss";

const allSections = ["home", "about", "projects", "blog", "contact"];

const MobileNav = () => {
  // const { allSections } = useSelector((state) => state.nav)
  // const { sectionInView } = useSelector((state) => state.nav)
  // const { isMenuOpen } = useSelector((state) => state.menu)
  // const dispatch = useDispatch()

  const links_refs = [];
  const setRef = (ref) => links_refs.push(ref);

  const handleClick = (e, nav) => {
    e.preventDefault();
    // dispatch(closeMenu())
    // dispatch(setCurrentSection(nav))

    setTimeout(() => {
      links_refs[e.target.dataset.target].click();
    }, 600);
  };

  const allNavs = allSections.map((nav, index) => (
    <li className={classes["mobileNav__list-item"]} key={nav}>
      <button
        data-target={`${index}`}
        // className={`mobileNav__link ${nav === sectionInView ? "active" : ""}`}
        onClick={(e) => handleClick(e, nav)}
        type="button"
      >
        {nav}
      </button>
      <a className="hidden" href={`#${nav}`} ref={setRef} data-scroll-to>
        {nav}
      </a>
    </li>
  ));

  return (
    <div className={`${classes.mobileNav} section-width`}>
      <ul className={classes["mobileNav__list"]}>{allNavs}</ul>
    </div>
  );
};

export default MobileNav;
