import { Button, ThemeButton, classNames } from 'shared'
import { useTheme } from 'app/providers'
import ThemeIcon from 'shared/assets/icons/themeIcon.svg'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
    text?: string
}

export const ThemeSwitcher = ({ className, text }: ThemeSwitcherProps) => {
    const { toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcherButton, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={cls.ThemeIcon} />
            {text}
        </Button>
    )
}
