import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Router from './router/index.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
      <Router />
     </BrowserRouter>
    {/* <App />  */}
  </React.StrictMode>,
)