import { RouteProvider, useTheme } from "app/providers";
import { classNames } from "shared";
import "./styles/index.scss";
import { Navbar } from "widgets";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <RouteProvider />
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};
