import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/main.css"
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'

import UserContextProvider from './context/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)
