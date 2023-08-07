import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Theme } from '../utils/types'

function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext)
    const [currentTheme, setCurrentTheme] = useState<Theme>()

    useEffect(() => {
        setCurrentTheme(theme)
    }, [theme])

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return { currentTheme, changeTheme }
}

export default useTheme