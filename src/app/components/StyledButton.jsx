import React from "react";

import classes from "./StyledButton.module.scss"

const StyledButton = React.forwardRef(function StyledButton ({ href, children, className, ...props }, ref) {

  const btnClasses = className ? `${className} ${classes.btn}` : `${classes.btn}`

  return href ? (
    <a ref={ref} className={btnClasses} href={href} {...props}>
      {children}
    </a>
  ) : (
    <button ref={ref && ref} className={btnClasses} {...props}>{children}</button>
  );
});

export default StyledButton;
