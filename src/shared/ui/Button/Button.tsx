import { classNames } from 'shared'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
  /* eslint-disable */
    CLEAR = 'clear',
    BORDER = 'border',
  /* eslint-enable */
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props
    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {/*eslint-disable-line*/...otherProps}
        >
            {children}
        </button>
    )
}
