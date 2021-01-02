import React from 'react'
import { ThemeProvider } from './context/theme-context'
import Layout from './components/Layout'

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}
