import classes from './NameTitle.module.scss'

const NameTitle = () => {
  const { REACT_APP_FIRST_NAME, REACT_APP_LAST_NAME } = process.env

  return (
    <a className={classes.nameTitle} href="#home">
      <div className={classes["nameTitle__container"]}>
        <span className={`${classes["nameTitle__inner"]} ${classes["nameTitle__inner--first"]} mr-[7px]`}>{REACT_APP_FIRST_NAME}</span>
        <span className={`${classes["nameTitle__inner"]} ${classes["nameTitle__inner--second"]}`}>{REACT_APP_LAST_NAME}</span>
      </div>
    </a>
  )
}

export default NameTitle
