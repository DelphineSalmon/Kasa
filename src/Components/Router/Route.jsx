import React from 'react'
import Home from '../../Pages/Home/Home'
import Lodging from '../../Pages/Lodging/Lodging'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import Abouts from '../../Pages/About/About'
import Error from '../../Pages/Error/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function MyRouter() {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Lodging/:id" element={<Lodging />} />
                    <Route path="/About" element={<Abouts />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default MyRouter
