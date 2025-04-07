import React from "react";
import "./About.css";
import img1 from "./assets/cof2.jpg";
import img2 from "./assets/cof33.jpg";
import img3 from "./assets/cof4.webp";
import img4 from "./assets/cof5.webp";

const About = () => {
  return (
    <div style={{overflowX:'hidden',overflowY:'hidden'}} >
    <div className="container mt-5 mb-5 " id="adiv1">
      <div className="row">
        {/* First Column */}
        <div className="col">
          <div id="div2">
            <img src={img1} alt="Coffee Image 1" id="cof2" className="mt-1" />
          </div>
        </div>

        {/* Second Column */}
        <div className="col" id="adiv3">
          <h1 id="abt">About</h1>
          <img src={img2} alt="Coffee Image 2" id="cof3" />
          <h6 id="pre2">Get deeper insight into all aspects ofthe coffee</h6> 
          <h6 id="pre2">industry — from regulatory information and trade </h6>
          <h6 id="pre2">data regulatory information and trade data.</h6>
          <img src={img3} alt="Coffee Image 3" id="cof4" />
          <h6 id="pre3">Roasting is a heat process that turns coffee in a fragrant,dark brown beans we know and love.</h6>
          <h6 id="pre3">Get the scoop on the four most common roasts.</h6>
          <img src={img4} alt="Coffee Image 4" id="cof5" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
