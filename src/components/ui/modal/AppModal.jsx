import React from "react";
import classes from "./AppModal.module.css";

export const AppModal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.appModal];

  visible && rootClasses.push(classes.active);

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.appModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {/* stopPropagation - отменяет дальнейшее развитие действий (в данном случае для отмены закрытия модалки при клике на белую зону) */}
        {children}
      </div>
    </div>
  );
};
