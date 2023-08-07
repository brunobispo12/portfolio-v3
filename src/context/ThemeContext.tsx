import { createContext, useEffect, useState } from "react";
import { Theme, contextProps } from "../utils/types";

export const ThemeContext = createContext<any>(null)

export default function ThemeContextProvider({ children }: contextProps) {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme') !== "dark" ? "light" : "dark")

    useEffect(() => {
        const root = window.document.documentElement

        const removeOldTheme = theme === "dark" ? "light" : "dark"

        root.classList.remove(removeOldTheme)
        root.classList.add(theme)
        localStorage.setItem("theme", theme)

    }, [theme])

    const themeContextValue = {
        theme,
        setTheme,
    }

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )
}