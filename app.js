import React from 'react'
import ReactDOM from 'react-dom'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    span {
      color: red;
    }
  }
`

ReactDOM.render(<div>
  <span>THIS TEXT SHOULD BE red</span>
  <GlobalStyle />
</div>, document.getElementById('app'))
