import React from 'react';
import "./Brand.css";
import img1 from "./assets/bru.webp";
import img2 from "./assets/david.webp";
import img3 from "./assets/rage.webp";
import img4 from "./assets/sleep.webp";
import img5 from "./assets/nescafe.webp";
import img6 from "./assets/barma.jpg";
import img7 from "./assets/bri.webp";
import img8 from "./assets/xtra.jpg";

const Brand = () => {
  return (
    <div style={{overflowX:'hidden',overflow:'hidden'}}>
      <div className="container mt-5 mb-5" id="div20">
        <div className="row">
        <h1 id="brand">Brands</h1>
          <div className="col">
            <div id="div21">
              <div id="div22">
                <img src={img1} alt="BRU" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="bru1">BRU</h1>
              </div>
              <div id="div23">
                <img src={img2} alt="DAVIDOFF" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="david">DAVIDOFF</h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="div24">
              <div id="div25">
                <img src={img3} alt="RAGE" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="rage">RAGE</h1>
              </div>
              <div id="div26">
                <img src={img4} alt="SLEEP OWL" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="sleep">SLEEP OWL</h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="div27">
              <div id="div28">
                <img src={img5} alt="NESCAFE" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="nescafe">NESCAFE</h1>
              </div>
              <div id="div29">
                <img src={img6} alt="BARMATIC" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="bar">BARMATIC</h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="div30">
              <div id="div31">
                <img src={img7} alt="BRISTOT" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="bri">BRISTOT</h1>
              </div>
              <div id="div32">
                <img src={img8} alt="XTRA" id="bru" />
                <h6 id="p3"></h6>
                <h1 id="xtra">XTRA</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
