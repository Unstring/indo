import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import('preline')

import App from './App.jsx'
import Nav from './Nav.jsx'
import Process from './process'
import Colleges from './colleges'
import Content from './Content'
import Faq from './faq'
import Blog from './Blog'

import Loan from './loan'
import Form from './form'
import Card from './Card'
import Table from './Table'
import Faq1 from './Faq1'
import Faq2 from './Faq2'
import Testimonial from './Testimonial'
import Events from './Event'
import Query from './Query'
import Footer from './footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <App />
    <Process />
    <Colleges />
    <Faq />
    <Content />
    <Blog />
    
    <Loan />
    <Form />
    <Card />
    <Table />
    <Faq1 />
    <Faq2 />
    <Testimonial />
    <Events />
    <Query />
    <Footer />

  </React.StrictMode>,
)
