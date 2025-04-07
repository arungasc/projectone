import React, { useState } from 'react'
import "./Order.css"
import img1 from "./assets/ordercof.jpg"
import img2 from "./assets/irish0.webp"
import img3 from "./assets/mexi.jpeg"
import img4 from "./assets/cortado.webp"
import img5 from "./assets/lungo.webp"
import img6 from "./assets/turkish.jpg"
import img7 from "./assets/drip.webp"
import axios from 'axios'


const Orderpage = () => {
    const [name,setName] = useState("");
    const [verity,setVerity] = useState("");
    const [hot,setHot] = useState("");
    const [cool,setCool] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:7000/post", {
                name,verity,hot,cool
            });
            alert(response.data.message); 
        } catch(err){
            console.log("success");
        }
    };

    const handleCancel = async () => {
        try {
          const response = await axios.post("http://localhost:7000/cancel", {
            name, verity
          });
          alert(response.data.message);
    
          // Clear form
          setName("");
          setVerity("");
          setHot("");
          setCool("");
        } catch (err) {
          alert("Cancel Failed");
          console.log(err);
        }
      };
  return (
    <div style={{overflowX:'hidden',overflowY:'hidden'}}>
        <div class="container mt-3 mb-5" id="div1">
        <h1 id="order"><b>Order Coffee</b></h1>
        <p></p>
        <img src={img1} id="ordercof"/>
        <div class="row">
            <div class="col-4">
                <div id="div02">
                    <div id="div3">
                        <img src={img2} id="irish0"/>
                        <h3 id="mex">IRISH</h3>
                        <button id="b2" onclick="abc()">Buy Now</button>
                    </div>
                    <div id="div4">
                        <img src={img3} id="irish0"/>
                        <h3 id="mex">MEXICAN</h3>
                        <button id="b2" onclick="abc()">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div id="div02">
                    <div id="div3">
                        <img src={img4} id="irish0"/>
                        <h3 id="mex">CORTADO</h3>
                        <button id="b2" onclick="abc()">Buy Now</button>
                    </div>
                    <div id="div4">
                        <img src={img5} id="irish0"/>
                        <h3 id="mex">LUNGO</h3>
                        <button id="b2" onclick="abc()">Buy Now</button>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div id="div02">
                    <div id="div3">
                        <img src={img6} id="irish0"/>
                        <h3 id="mex">TURKISH</h3>
                        <button id="b2" onclick="abc()">Buy Now</button>
                    </div>
                    <div id="div4">
                        <img src={img7} id="irish0"/>
                        <h3 id="mex">DRIP</h3>
                        <button id="b2" onclick="abc()">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
        <form onSubmit={handleSubmit} class="container mt-4 w-50">
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" placeholder='Enter your name'/>
  </div>
  <div class="mb-3">
    <label class="form-label">Verity</label>
    <input type="text" value={verity} onChange={(e) => setVerity(e.target.value)} class="form-control" placeholder='Enter coffee verity'/>
  </div>
  <div class="mb-3">
    <label class="form-label">Hot/Cool</label>
    <input type="text" value={hot} onChange={(e) => setHot(e.target.value)} class="form-control" placeholder='Enter coffee temperature'/>
  </div>
  <div class="mb-3">
    <label class="form-label">Extra sugar</label>
    <input type="text" value={cool} onChange={(e) => setCool(e.target.value)} class="form-control" placeholder='Enter coffee sweetness' />
  </div>
  <button type="submit" class="btn btn-primary"  id='or'>Order</button>
  <button type="button" className="btn btn-danger ms-3" onClick={handleCancel} id='cancel'>Cancel</button>
</form>

    </div>      
    </div>
  )
}

export default Orderpage
