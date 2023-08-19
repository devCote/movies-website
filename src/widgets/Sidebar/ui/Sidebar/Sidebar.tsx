import { classNames } from 'shared'
import { ReactNode, useState } from 'react'
import SidebarIcon from 'shared/assets/icons/sidebarIcon.svg'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
    children?: ReactNode
}

export const Sidebar = ({ className, children }: SidebarProps) => {
    const [collapsed, toggleCollapse] = useState(true)

    const onToggle = () => {
        toggleCollapse((prev) => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            {children}
            <button type="button" className={cls.Button} onClick={onToggle}>
                <SidebarIcon className={cls.SidebarIcon} />
            </button>
        </div>
    )
}
