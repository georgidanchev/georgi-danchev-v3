import classes from "./MobileBtn.module.scss";

// import { useSelector, useDispatch } from "react-redux"
// import { toggleMenu } from "../redux/menuReducer"

const MobileBtn = () => {
  // const dispatch = useDispatch()
  // const { isMenuOpen } = useSelector((state) => state.menu)

  return (
    <button
      // className={isMenuOpen ? "menu-btn active" : "menu-btn"}
      className={classes["menu-btn"]}
      // onClick={() => dispatch(toggleMenu())}
      type="button"
    >
      <div className={classes["menu-btn__wrap"]}>
        <div className={`${classes["menu-btn__line"]} ${classes["menu-btn__line-1"]}`}></div>
        <div className={`${classes["menu-btn__line"]} ${classes["menu-btn__line-2"]}`}></div>
        <div className={`${classes["menu-btn__line"]} ${classes["menu-btn__line-3"]}`}></div>
      </div>
    </button>
  );
};

export default MobileBtn;
