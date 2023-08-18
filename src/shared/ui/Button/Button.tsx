import { classNames } from "shared";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
