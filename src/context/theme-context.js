import React from 'react'

const ThemeContext = React.createContext()

function ThemeProvider(props) {
  const themes = {
    light: {
      name: 'light',
      foreground: '#111',
      background: '#eee',
    },
    dark: {
      name: 'dark',
      foreground: '#fff',
      background: 'rgb(40, 44, 52)',
    },
  }

  const toggleTheme = () => {}

  return <ThemeContext.Provider value={{ themes, toggleTheme }} {...props} />
}

function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}

export { ThemeProvider, useTheme }
