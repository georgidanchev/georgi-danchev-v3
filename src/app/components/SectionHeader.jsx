import classes from "./SectionHeader.module.scss";

const SectionHeader = ({ className, link_url, link_title, subtitle, title }) => {
  return (
    <div className={`${className && classes[className]} ${classes["section-header"]} ${link_title != null ? classes["section-header--w-t-btn"] : ""} `}>
      <div className={classes["section-header__wrapper"]}>
        {subtitle && <p className={classes["section-header__subheading"]}>{subtitle}</p>}
        <h2 className={classes["section-header__heading"]}>{title}</h2>
      </div>
      {link_url && (
        <a href={link_url} className={`${classes["section-header__btn"]} btn`}>
          {link_title}
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
