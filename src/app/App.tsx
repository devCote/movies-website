import { AppRouter, useTheme } from 'app/providers'
import { classNames } from 'shared'
import './styles/index.scss'
import { Navbar, Sidebar } from 'widgets'
import { Suspense } from 'react'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="LOADING">
                <Navbar />

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
