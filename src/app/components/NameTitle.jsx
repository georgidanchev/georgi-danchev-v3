import classes from "./NameTitle.module.scss";

const NameTitle = ({className}) => {
  return (
    <a className={`${className && className} ${classes["nameTitle"]}`} href="#home">
      <div className={classes["nameTitle__container"]}>
        <span className={`${classes["nameTitle__inner--header"]} mr-[7px]`}>Georgi</span>
        <span className={`${classes["nameTitle__inner--header"]} font-bold`}>Danchev</span>
      </div>
    </a>
  );
};

export default NameTitle;
