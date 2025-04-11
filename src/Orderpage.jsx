import React, { useState } from 'react';
import "./Order.css";
import img1 from "./assets/ordercof.jpg";
import img2 from "./assets/irish0.webp";
import img3 from "./assets/mexi.jpeg";
import img4 from "./assets/cortado.webp";
import img5 from "./assets/lungo.webp";
import img6 from "./assets/turkish.jpg";
import img7 from "./assets/drip.webp";
import axios from 'axios';

const Orderpage = () => {
  const [name, setName] = useState("");
  const [verity, setVerity] = useState("");
  const [hot, setHot] = useState("");
  const [cool, setCool] = useState("");
  const [loading, setLoading] = useState(false);

  const coffeeVarieties = [
    "Irish", "Mexican", "Cortado", "Lungo", "Turkish",
    "Drip", "Espresso", "Latte", "Americano", "Cappuccino"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://backendone-4.onrender.com/post", {
        name, verity, hot, cool
      });
      alert(response.data.message);
    } catch (err) {
      console.error("Order failed", err);
      alert("Order failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    try {
      const response = await axios.post("https://backendone-4.onrender.com/cancel", {
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
    <div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
      <div className="container mt-5 mb-5" id="div1">
        <h1 id="order"><b>Order Coffee</b></h1>
        <img src={img1} id="ordercof" alt="Order Banner" />
        <div className="row">
          {/* 1st Column */}
          <div className="col-4">
            <div id="div02">
              <div id="div3">
                <img src={img2} id="irish0" alt="IRISH" />
                <h3 id="mex">IRISH</h3>
              </div>
              <div id="div4">
                <img src={img3} id="irish0" alt="MEXICAN" />
                <h3 id="mex">MEXICAN</h3>
              </div>
            </div>
          </div>

          {/* 2nd Column */}
          <div className="col-4">
            <div id="div02">
              <div id="div3">
                <img src={img4} id="irish0" alt="CORTADO" />
                <h3 id="mex">CORTADO</h3>
              </div>
              <div id="div4">
                <img src={img5} id="irish0" alt="LUNGO" />
                <h3 id="mex">LUNGO</h3>
              </div>
            </div>
          </div>

          {/* 3rd Column */}
          <div className="col-4">
            <div id="div02">
              <div id="div3">
                <img src={img6} id="irish0" alt="TURKISH" />
                <h3 id="mex">TURKISH</h3>
              </div>
              <div id="div4">
                <img src={img7} id="irish0" alt="DRIP" />
                <h3 id="mex">DRIP</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <form onSubmit={handleSubmit} className="container mt-4 w-50">
          <div className="mb-3">
            <label className="form-label label-orange">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder='Enter your name'
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label label-orange">Varieties</label>
            <select
              className="form-control"
              value={verity}
              onChange={(e) => setVerity(e.target.value)}
              required
            >
              <option value="" disabled>Select a coffee variety</option>
              {coffeeVarieties.map((variety, index) => (
                <option key={index} value={variety}>{variety}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label label-orange">Hot/Cool</label>
            <input
              type="text"
              value={hot}
              onChange={(e) => setHot(e.target.value)}
              className="form-control"
              placeholder='Enter coffee temperature'
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label label-orange">Extra sugar</label>
            <input
              type="text"
              value={cool}
              onChange={(e) => setCool(e.target.value)}
              className="form-control"
              placeholder='Enter coffee sweetness'
              required
            />
          </div>

          <button type="submit" className="btn btn-primary" id='or' disabled={loading}>
            {loading ? "Ordering..." : "Order"}
          </button>
          <button type="button" className="btn btn-danger ms-3" onClick={handleCancel} id='cancel'>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Orderpage;
