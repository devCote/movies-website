import { AppRouter, useTheme } from "app/providers";
import { classNames } from "shared";
import "./styles/index.scss";
import { Navbar, Sidebar } from "widgets";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const Component = () => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };

    return (
        <div>
            <button onClick={toggleLang}>{t("translate")}</button>
            <div>{t("bitch")}</div>
        </div>
    );
};

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="LOADING">
                <Navbar />
                <Component />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
