import React, { useState } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import styled from 'styled-components'
import { useTheme } from '../context/theme-context'
import ThemedButton from './ThemedButton'
import Counter from './Counter'

const StyledMain = styled.main`
  color: ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  height: 100vh;

  pre {
    color: ${({ theme }) => theme.foreground};
  }
`

function Layout() {
  const { themes } = useTheme()
  const [theme, setTheme] = useState(themes.dark)

  function toggleTheme() {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  return (
    <StyledMain theme={theme}>
      <Container fluid>
        <h1>Practical</h1>
        <h2>
          React <pre className="d-inline">useReducer()</pre>
        </h2>
        <Jumbotron className="my-4" style={{ backgroundColor: '#20232a' }}>
          <Counter initialCount={10} />
        </Jumbotron>
        <ThemedButton onToggle={toggleTheme}>Toggle Theme</ThemedButton>
      </Container>
    </StyledMain>
  )
}

export default Layout
