import { AboutPage, HomePage, Page404 } from 'pages'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
  /* eslint-disable */
    HOME = 'home',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
  /* eslint-enable */
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <Page404 />,
    },
}
