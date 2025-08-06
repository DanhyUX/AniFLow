import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='lg:w-[40%] hidden' />
    <div className='lg:w-[25%] hidden' />
    <div className='lg:w-[30%] hidden' />
    <App />
  </StrictMode>,
)
