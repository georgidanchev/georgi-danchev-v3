// import { useSelector, useDispatch } from "react-redux"
// import { setCurrentSection } from "../redux/navReducer"

import classes from "./DotNavs.module.scss";

const DotNavs = () => {
  // const dispatch = useDispatch()
  // const { sectionInView } = useSelector((state) => state.nav)
  // const { allSections } = useSelector((state) => state.nav)

  // const dotNavs = allSections.map((nav) => (
  //   <li className=`${classes["dot-navs__list-item"]}` key={nav}>
  //     <a
  //       href={`#${nav}`}
  //       // onClick={() => dispatch(setCurrentSection(nav))}
  //       className={`${classes["dot-navs__link"]} ${nav === sectionInView ? "active" : ""}`}
  //       data-scroll-to
  //     >
  //       <span className=`${classes["dot-navs__text"]}`>{nav}</span>
  //     </a>
  //   </li>
  // ))

  return (
    <nav className={`${classes["dot-navs"]}`}>
      <ul className={`${classes["dot-navs__list"]} animate__animated animate__delay-1s animate__fadeIn`}>
        {/* {dotNavs} */}
      </ul>
    </nav>
  )
}

export default DotNavs
