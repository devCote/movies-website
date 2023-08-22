import { Button, ThemeButton, classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import cls from './ErrorFallback.module.scss'

// Fallback page when error ocures in the app
export const ErrorFallback = () => {
    const { t } = useTranslation()

    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.error_fallback)}>
            <p>{t('error-text')}</p>
            <Button
                type="button"
                onClick={reloadPage}
                theme={ThemeButton.BORDER}
            >
                {t('reload-page')}
            </Button>
        </div>
    )
}
