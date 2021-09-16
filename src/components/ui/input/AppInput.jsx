import React from "react";
import classes from "./AppInput.module.css";

export const AppInput = React.forwardRef((props, ref) => {
  // конструкция для проброса ref'а
  return <input ref={ref} {...props} className={classes.appInput} />;
});
