import { Button, ThemeButton, classNames } from "shared";
import cls from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers";
import ThemeIcon from "shared/assets/icons/themeIcon.svg";

interface ThemeSwitcherProps {
    className?: string;
    text?: string;
}

export const ThemeSwitcher = ({ className, text }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? (
                <ThemeIcon height={"14px"} fill="white" width={"14px"} />
            ) : (
                <ThemeIcon height={"14px"} width={"14px"} />
            )}{" "}
            {text}
        </Button>
    );
};
