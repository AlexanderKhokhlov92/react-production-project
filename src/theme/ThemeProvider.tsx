import { FC, useMemo, useState, ReactNode, useEffect } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
      toggleTheme: toggleTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
