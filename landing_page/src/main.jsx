import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import('preline')

import App from './App.jsx'
import Nav from './Nav.jsx'
import Process from './process'
import Colleges from './colleges'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Process />
    <Colleges />
  </React.StrictMode>,
)
