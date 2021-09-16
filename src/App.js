import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/ui/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
// для того, чтобы в самом приложении можно было пользоваться context нужно обернуть его всё в AuthContext.Provider
// в AuthContext.Provider задаём все зависимости context'а, которые создаём здесь
