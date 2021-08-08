import React from 'react';

import classes from './Button.module.css';

const Button = ({ children, secondary, ...props }) => {
  return (
    <button
      className={`${classes.btn} ${
        secondary ? classes.secondary : classes.primary
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
