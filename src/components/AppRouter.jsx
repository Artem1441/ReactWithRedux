import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../context";
import { Error } from "./../pages/Error";
import { privateRoutes, publicRoutes } from "./../router/index";
import { Loader } from "./ui/loader/Loader";

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}

      <Route exact path="/error">
        <Error />
      </Route>
      {/* пока нигде не юзается */}

      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
  // Switch - следит за состоянием url, Redirect в конце - перенаправляет на стрнаицу /error при неправильном url
  // exact - отвечает за то, чтобы пути /posts и /posts/:id не пересекались
};
