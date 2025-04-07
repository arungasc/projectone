import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Navigation'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Varieties from './Varieties'
import Brand from './Brand';
import Footer from './Footer';
import Orderpage from './Orderpage';

function App() {

  return (
    <>
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home/orderpage" element={<Orderpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/varieties" element={<Varieties/>}/>
        <Route path="/brand" element={<Brand/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
