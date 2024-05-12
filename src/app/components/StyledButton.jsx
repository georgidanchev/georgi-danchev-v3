import classes from "./StyledButton.module.scss"

const StyledButton = ({ href, children, className, ...props }) => {

  const btnClasses = className ? `${className} ${classes.btn}` : `${classes.btn}`

  return href ? (
    <a className={btnClasses} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button className={btnClasses} {...props}>{children}</button>
  );
};

export default StyledButton;
