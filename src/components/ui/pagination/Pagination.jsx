import React from "react";
import classes from "./Pagination.module.css";

export const Pagination = ({ pagesArray, currentPage, setPage }) => {
  return (
    <div className={classes.page__wrapper}>
      {pagesArray.map((page, index) => (
        <div
          onClick={() => setPage(page)}
          key={index}
          className={
            page === currentPage ? classes.page__current : classes.page
          }
        >
          {page}
        </div>
      ))}
    </div>
  );
};
