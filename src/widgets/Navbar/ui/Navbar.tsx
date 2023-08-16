import { Link } from "react-router-dom";
import { AppLink, classNames } from "shared";
import cls from "./Navbar.module.scss";
import { AppLinkTheme } from "shared";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.homeLink}
                    to={"/"}
                >
                    home
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    about
                </AppLink>
            </div>
        </div>
    );
};
