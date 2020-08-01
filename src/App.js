import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home'
import { Footer } from './components/Footer/Footer'

export const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Route exact path='/' component={Home}></Route>
            </Router>
            <Footer />
        </div>
    )
}
