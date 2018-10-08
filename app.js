import React from 'react'
import ReactDOM from 'react-dom'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  span {
    color: red;
  }
`

const Container = styled.div`
  display: flex;
  padding: 100px;
  justify-content: center;
  > span {
    font-size: 2rem;
  }
`

const App = _ => (
  <Container>
    <span>THIS SHOULD BE RED</span>
    <GlobalStyle />
  </Container>
)

ReactDOM.render(<App />, document.getElementById('app'))
