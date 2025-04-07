import React from 'react';
import './Footer.css';
import img1 from './assets/cof8.gif';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{overflowX:'hidden',overflowY:'hidden'}}>
      <div id="div33">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 id="add">Address</h3>
              <h5 id="sathy">Sathyamangalam</h5>
            </div>
            <div className="col">
              <h3 id="email">E-mail id</h3>
              <h5 id="sathy">arun@gmail.com</h5>
            </div>
            <div className="col">
              <h3 id="add">Contact</h3>
              <h5 id="sathy">6369702012</h5>
            </div>
            <div className="col">
              <img src={img1} id="ftr" alt="Footer decoration" />
            </div>
          </div>
        </div>
        <Link to="https://www.facebook.com/" ><FaFacebookF id="social"/></Link>
        <Link to="https://www.instagram.com/"><FaInstagram id="social2"/></Link>
        <Link to="https://web.telegram.org/"><FaTelegram id="social3"/></Link>
      </div>
    </div>
  );
};

export default Footer;
