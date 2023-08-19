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
            className={classNames(cls.theme_switcher_button, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={cls.theme_icon} />
            {text}
        </Button>
    )
}
