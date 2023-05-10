import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FiltersContextProvider } from './context/useFiltersContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <FiltersContextProvider>
    <App />
  </FiltersContextProvider>
)
