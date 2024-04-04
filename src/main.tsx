import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/main.css"
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
