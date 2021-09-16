import React, { useContext } from "react";
import { AppInput } from "./../components/ui/input/AppInput";
import { AppButton } from "./../components/ui/button/AppButton";
import { AuthContext } from "../context";

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <AppInput type="text" placeholder="Введите логин" />
        <AppInput type="password" placeholder="Введите пароль" />
        <AppButton>Войти</AppButton>
      </form>
    </div>
  );
};
