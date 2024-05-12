import classes from "./SectionHeader.module.scss"

const SectionHeader = (props) => {
  return (
    <div className={`${classes["section-header"]} ${props.link_title != null ? classes["section-header--w-t-btn"] : ""} `}>
      <div className={classes["section-header__wrapper"]}>
        <p className={classes["section-header__subheading"]}>{props.subtitle}</p>
        <h2 className={classes["section-header__heading"]}>{props.title}</h2>
      </div>
      {props.link_url != null ? (
        <a href={props.link_url} className={`${classes["section-header__btn"]} btn`}>
          {props.link_title}
        </a>
      ) : (
        ""
      )}
    </div>
  )
}

export default SectionHeader
