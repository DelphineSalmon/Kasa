import React from 'react'
import Home from '../../Pages/Home'
import Lodging from '../../Pages/Lodging'
import Header from '../../Layout/Header/header'
import Footer from '../../Layout/Footer/footer'
import Abouts from '../../Pages/About'
import Error from '../../Pages/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function MyRouter() {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Lodging" element={<Lodging />} />
                    <Route path="/About" element={<Abouts />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default MyRouter
