import { classNames } from "shared";
import cls from "./Sidebar.module.scss";
import { ReactNode, useState } from "react";

interface SidebarProps {
    className?: string;
    children?: ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
    const [collapsed, toggleCollapse] = useState(false);

    const onToggle = () => {
    toggleCollapse(prev => !prev)
  }

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {children}
      <button onClick={onToggle}>toggle</button>
        </div>
    );
};
