import { AppRouter, useTheme } from "app/providers";
import { classNames } from "shared";
import "./styles/index.scss";
import { Navbar, Sidebar } from "widgets";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
            <AppRouter />
            </div>
        </div>
    );
};
