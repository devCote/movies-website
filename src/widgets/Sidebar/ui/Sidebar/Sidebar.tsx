import { classNames } from 'shared'
import { FC, ReactNode, useState } from 'react'
import SidebarIcon from 'shared/assets/icons/sidebarIcon.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
    children?: ReactNode
    id?: string
}

export const Sidebar: FC<SidebarProps> = ({
    className,
    children,
}) => {
    const [collapsed, toggleCollapse] = useState(true)

    const onToggle = () => {
        toggleCollapse((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {children}
            <button
                type="button"
                data-testid="sidebar_toggle"
                className={cls.button}
                onClick={onToggle}
            >
                <SidebarIcon className={cls.sidebar_icon} />
            </button>
        </div>
    )
}
