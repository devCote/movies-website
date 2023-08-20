import { useEffect, useState } from 'react'
import { Button } from 'shared'

export const BugButton = () => {
    const [error, toggleError] = useState(false)

    const imitateError = () => toggleError((prev) => !prev)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return <Button onClick={imitateError}>thow error</Button>
}
