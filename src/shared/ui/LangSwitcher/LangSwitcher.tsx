import { Button, ThemeButton, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <Button
            data-testid="lang_btn"
            className={classNames(cls.lang_switcher, {}, [className])}
            theme={ThemeButton.BORDER}
            onClick={toggleLang}
        >
            {t('language')}
        </Button>
    )
}
