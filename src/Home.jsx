import React from 'react'
import "./Home.css"
import img1 from "./assets/coffee-1.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{backgroundColor:'black',overflowX:'hidden'}}>
      <div style={{
        backgroundImage:`url(${img1})`,
        backgroundRepeat:'no-repeat',
        height:'621px'
      }}>
        <h1 id="start">Start Your Day With A</h1>
        <h1 id="fc">Fresh Coffee</h1>
        <pre id="pre1">Coffee is a popular and beloved beverage enjoyed by
People around the world.
        </pre>
        <Link to="home/orderpage"><button id="bh1">Order Now</button></Link>
    </div>      
    </div>
  )
}

export default Home
