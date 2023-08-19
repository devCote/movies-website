import { classNames } from 'shared'
import { Link } from 'react-router-dom'
import React, { FC } from 'react'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  /* eslint-disable */
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
  /* eslint-enable */
}

interface AppLinkProps {
    className?: string
    children: React.ReactNode
    to: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {/*eslint-disable-line*/...otherProps}
        >
            {children}
        </Link>
    )
}
