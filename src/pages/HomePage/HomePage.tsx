import { useTranslation } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation()

    return <div>{t('HOME PAGE')}</div>
}

export default HomePage
