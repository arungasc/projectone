import React from "react";
import "./Menu.css";
import img1 from "./assets/cof6.webp";
import img2 from "./assets/cof7.webp";

const Menu = () => {
  return (
    <div style={{overflowX:'hidden',overflowY:'hidden'}}>
    <div className="container mt-5 mb-5" id="mdiv4">
      <div className="row">
        {/* First Column */}
        <div className="col">
          <div id="div5">
            <img src={img1} alt="Coffee Image 1" id="cof6" />
          </div>
        </div>

        {/* Second Column */}
        <div className="col" id="mdiv6">
          <img src={img2} alt="Coffee Image 2" id="cof7" />
          <h1 id="mu">
            <b>Menu</b>
          </h1>
          <h3 id="hi">Hot / Ice</h3>
          <pre id="latte">Latte         5.75  6.75</pre>
          <pre id="mocha">Mocha         5.75  6.75</pre>
          <pre id="espresso">Espresso      4.25  5.25</pre>
          <pre id="cold">Cold Brew      --   6.75</pre>
          <pre id="americano">Americano     4.25  5.25</pre>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Menu;
