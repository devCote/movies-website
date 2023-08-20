import { BugButton } from 'app/providers'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation()

    return (
        <div>
            {t('HOME PAGE')}
            <BugButton />
        </div>
    )
}

export default HomePage
