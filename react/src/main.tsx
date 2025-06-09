import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './App.tsx' // ou App.tsx, conforme seu projeto
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
