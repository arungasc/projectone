import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Nav.css"
import img1 from "./assets/cof.png"

const Navigation = () => {
  return (
    <div style={{backgroundColor:'#CD7F32',height:'60px'}}>
    <div className='container '>
      <table>
        <tr style={{position:'relative',bottom:'15px'}}>
          <td style={{fontSize:'60px',position:'relative',bottom:'4px'}}>C</td>
          <td><img src={img1} style={{width:'60px',height:'60px',borderRadius:'50px'}}/></td>
          <td style={{fontSize:'60px',position:'relative',bottom:'4px'}}>ffee</td>
          <td>
        <ul id='ul'>
            <li>
                <NavLink to="/"  id='li1'>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" id='li1'>About</NavLink>
            </li>
            <li>
            <NavLink to="/menu" id='li1'>Menu</NavLink>
            </li>
            <li>
            <NavLink to="/varieties" id='li1'>Varieties</NavLink>
            </li>
            <li>
            <NavLink to="/brand" id='li1'>Brand</NavLink>
            </li>
        </ul> 
        </td>
        </tr>
      </table>     
    </div>
    </div>
  )
}

export default Navigation
