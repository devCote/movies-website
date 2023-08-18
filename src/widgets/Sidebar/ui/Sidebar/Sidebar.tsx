import { classNames } from "shared";
import cls from "./Sidebar.module.scss";
import { ReactNode, useEffect, useState } from "react";
import SidebarIcon from "shared/assets/icons/sidebarIcon.svg";
import { Theme, useTheme } from "app/providers";

interface SidebarProps {
    className?: string;
    children?: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
    const [collapsed, toggleCollapse] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const onToggle = () => {
        toggleCollapse((prev) => !prev);
    };

    useEffect(() => {
        console.log({ cls });
    }, []);

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {children}
            <button className={cls.Button} onClick={onToggle}>
                <SidebarIcon className={cls.SidebarIcon} />
            </button>
        </div>
    );
};
