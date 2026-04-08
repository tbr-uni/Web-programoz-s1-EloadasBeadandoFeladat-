import React, { useState } from "react";
import PizzaCalculator from "./components/PizzaCalculator";
import PizzaStats from "./components/PizzaStats";
import "./styles/Calculator.css";

function App() {
  const [view, setView] = useState("calc");

  return (
    <div className="spa-wrapper">
      {/* --- PONTOS MÁSOLAT AZ INDEX.HTML FEJLÉCÉRŐL --- */}
      <header className="bg-dark text-white py-4">
        <div className="container text-center">
          <h1>Web programozás-1 Előadás Házi feladat</h1>
        </div>
      </header>

      {/* --- PONTOS MÁSOLAT A BOOTSTRAP MENÜRŐL --- */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript.html">JAVASCRIPT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="react.html">REACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">SPA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="fetchapi.html">FETCHAPI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="axios.html">AXIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="oojs.html">OOJS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- SPA TARTALOM --- */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">React SPA Alkalmazás</h2>
        
        {/* SPA belső váltógombok */}
        <div className="btn-group w-100 mb-4 shadow-sm">
          <button 
            className={`btn ${view === 'calc' ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => setView("calc")}
          >
            Árkalkulátor
          </button>
          <button 
            className={`btn ${view === 'stats' ? 'btn-primary' : 'btn-outline-primary'}`} 
            onClick={() => setView("stats")}
          >
            Kategória Statisztika
          </button>
        </div>

        {/* Kiválasztott komponens megjelenítése */}
        <div className="card p-4 shadow border-0 mb-5">
          {view === "calc" ? <PizzaCalculator /> : <PizzaStats />}
        </div>
      </div>

     
    </div>
  );
}

export default App;