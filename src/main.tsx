import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './features/favorites/context/FavoritesContext'
import './index.css'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
       <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)
