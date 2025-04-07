import React from 'react'
import "./Varieties.css"
import img1 from "./assets/cof9.jpg"
import img2 from "./assets/cof10.jpg"
import img3 from "./assets/cof11.jpg"
import img4 from "./assets/cof011.jpeg"
import img5 from "./assets/cof12.jpg"
import img6 from "./assets/cof13.avif"
import img7 from "./assets/cof14.jpg"
import img8 from "./assets/cof015.webp"
import img9 from "./assets/cof15.jpg"
import img10 from "./assets/cof16.jpg"
import img11 from "./assets/cof17.jpg"
import img12 from "./assets/cof019.png"



const Varieties = () => {
  return (
    <div style={{overflowX:'hidden',overflowY:'hidden'}}>
       <div class="container mt-5 mb-5" id="div7v">
            <div class="row">
            <h1 id="gallery"><b>Varieties</b></h1>
            <p id="p1"></p>
                <div class="col">
                <div  id="div12">
                <div id="div13">
                    <img src={img1} id="div91"/>
                    <h1 id="latte1"><b>LATTE</b></h1>
                </div>
                <div id="div14">
                    <img src={img2} id="div91"/>
                    <h1 id="cap1"><b>CAPPUCCIND</b></h1>
                </div>
                <div id="div15">
                    <img src={img3} id="div91"/>
                    <h1 id="ado1"><b>ESPRESS0</b></h1>
                </div>
                <div id="div015">
                    <img src={img4} id="div91"/>
                    <h1 id="aff1"><b>FLAT WHITE</b></h1>
                </div>
            </div>
                </div>
                <div class="col">                        
            <div  id="div12">
                <div id="div13">
                    <img src={img5} id="div91"/>
                    <h1 id="dop1"><b>DOPPIO</b></h1>
                </div>
                <div id="div14">
                    <img src={img6} id="div91"/>
                    <h1 id="red1"><b>RED EYE</b></h1>
                </div>
                <div id="div15">
                    <img src={img7} id="div91"/>
                    <h1 id="ado1"><b>CORTADO</b></h1>
                </div>
                <div id="div015">
                    <img src={img8} id="div91"/>
                    <h1 id="aff1"><b>AFFOGATO</b></h1>
                </div>
            </div>
                </div>
                <div class="col">
            <div  id="div16">
                <div id="div17">
                    <img src={img9} id="div91"/>
                    <h1 id="lungo1"><b>LUNGO</b></h1>
                </div>
                <div id="div18">
                    <img src={img10} id="div91"/>
                    <h1 id="machh1"><b>MACCHIATO</b></h1>
                </div>
                <div id="div19">
                    <img src={img11} id="div91"/>
                    <h1 id="mocha1"><b>MOCHA</b></h1>
                </div>
                <div id="div019">
                    <img src={img12} id="div91"/>
                    <h1 id="irish1"><b>IRISH</b></h1>
                </div>
            </div>        
                </div>
            </div>
            <p id="p2"></p>
        </div>      
    </div>
  )
}

export default Varieties
