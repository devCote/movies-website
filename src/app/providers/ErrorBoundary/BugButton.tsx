import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared'

export const BugButton = () => {
    const [error, toggleError] = useState(false)
    const { t } = useTranslation()

    const imitateError = () => toggleError((prev) => !prev)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return <Button onClick={imitateError}>{t('error')}</Button>
}
