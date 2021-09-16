import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AppButton } from "./../button/AppButton";
import { AuthContext } from "../../../context";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className={classes.navbar__body}>
      <div className={classes.navbar}>
        <div className={classes.navbar__container}>
          {isAuth ? <AppButton onClick={logout}>Выйти</AppButton> : <div></div>}
          <div className={classes.navbar__link}>
            <Link to="/about">О нас</Link>
            <Link to="/posts">Посты</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
