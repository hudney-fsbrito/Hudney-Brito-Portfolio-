import React from 'react'
import ReactDOM from 'react-dom/client'
import MyGlobalStyle from './styles/GlobalStyle.js'
import AppRoutes from './routes/AppRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyle />
    <AppRoutes />
  </React.StrictMode>,
)
