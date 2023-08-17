import { classNames } from "shared";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers";

interface ThemeSwitcherProps {
    className?: string;
    text?: string;
}

export const ThemeSwitcher = ({ className, text }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
              onClick={toggleTheme}
        >
            {text}
        </button>
    );
};

