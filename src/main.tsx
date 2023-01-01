import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider} from 'styled-components'
import GlobalStyles from './util/GlobalStyles'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },  
  mobile: '768px',
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
