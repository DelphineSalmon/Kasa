import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Lodging from './Pages/Lodging'
import Header from './Components/Header'
import About from './Pages/About'
import Error from './Pages/404'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Lodging" element={<Lodging/>} />
        <Route path="/About" element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


