import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./assets/styles/main.css"
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'

import "./i18n"
import LanguageContextProvider from './context/LanguageContext.tsx'
import UserContextProvider from './context/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <LanguageContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </LanguageContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)
