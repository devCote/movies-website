import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Link } from "react-router-dom";
import { HomePageLazy } from "./pages/HomePage.Lazy";
import { AboutPageLazy } from "./pages/AboutPage.Lazy";
import { FC, Suspense, useContext } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

export const App: FC = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>homepage</Link>
      <Link to={"/about"}>about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};
