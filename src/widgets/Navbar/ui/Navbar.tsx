import { AppLink, AppLinkTheme, ThemeSwitcher, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.navbar, {}, [cls[className]])}>
            <ThemeSwitcher />
            <LangSwitcher />
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.homeLink}
                    to="/"
                >
                    {t('home')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                    {t('about')}
                </AppLink>
            </div>
        </div>
    )
}
