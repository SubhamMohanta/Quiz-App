import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContext from "./components/ParentContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <MainContext>
    <App />
  </MainContext>
)
