import classes from "./NameTitle.module.scss";

const NameTitle = ({className}) => {
  return (
    <a className={`${classes["nameTitle"]} ${className && classes[className]}`} href="#home" data-scroll-to>
      <div className={classes["nameTitle__container"]}>
        <span className={`${classes["nameTitle__inner"]} ${classes["nameTitle__inner--first"]}`}>Georgi</span>
        <span className={`${classes["nameTitle__inner"]} ${classes["nameTitle__inner--second"]}`}>Danchev</span>
      </div>
    </a>
  );
};

export default NameTitle;
