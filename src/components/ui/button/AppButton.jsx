import React from "react";
import classes from "./AppButton.module.css";

export const AppButton = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.appBtn}>
      {children}
    </button>
  );
};
