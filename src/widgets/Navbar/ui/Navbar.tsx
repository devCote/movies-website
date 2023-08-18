import { Link } from "react-router-dom";
import { AppLink, ThemeSwitcher, classNames } from "shared";
import cls from "./Navbar.module.scss";
import { AppLinkTheme } from "shared";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

   const { t } = useTranslation() 

    return (
        <div className={classNames(cls.navbar, {}, [cls[className]])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.homeLink}
                    to={"/"}
                >
                    {t("home")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("about")}
                </AppLink>
            </div>
        </div>
    );
};
