import { AppRouter, useTheme } from 'app/providers'
import { classNames } from 'shared'
import './styles/index.scss'
import { Navbar, Sidebar } from 'widgets'
import { Suspense } from 'react'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />

                <div className="content_page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
