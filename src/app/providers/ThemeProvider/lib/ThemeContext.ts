import { createContext } from 'react'

export enum Theme {
  // eslint-disable-next-line
    lIGHT = 'light',
  // eslint-disable-next-line
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (_theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
