import { classNames } from '../../../../shared/lib/classNames/classNames'
import * as cls from './ThemeSwitcher.module.scss'
import { useTheme } from '../../../../app/providers/ThemeProvider/lib/useTheme'
import LightIcon from '../../../assets/icons/theme-light.svg'
import DarkIcon from '../../../assets/icons/theme-dark.svg'
import { Theme } from '../../../../app/providers/ThemeProvider/index'
import { Button, ThemeButton } from '../../Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  )
}
