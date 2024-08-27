import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import OptionProvider from "./context/OptionContext"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OptionProvider>
      <App />

    </OptionProvider>
  </StrictMode>,
)
