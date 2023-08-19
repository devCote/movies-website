import { classNames } from 'shared'
import { useTranslation } from 'react-i18next'
import cls from './Page404.module.scss'

export const Page404 = () => {
    const { t } = useTranslation()
    return <div className={classNames(cls.page404)}>{t('404')}</div>
}
