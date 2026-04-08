import React, { useState } from "react";
import CompButton from "./CompButton";
import "../styles/Calculator.css";

function PizzaCalculator() {
  // Állapotok az órai nextValue/prevValue mintájára
  const [total, setTotal] = useState(0);         // A "kosár" tartalma (mint a prevValue)
  const [quantity, setQuantity] = useState("1"); // A beírt darabszám (mint a nextValue)
  const [subTotal, setSubTotal] = useState(0);   // Az aktuálisan kiszámolt tétel
  const [finalShow, setFinalShow] = useState(false); // Végösszeg kijelzéséhez

  // Árak a kategoria.txt alapján
  const prices = { 
    "apród": 850, 
    "főnemes": 950, 
    "király": 1250, 
    "lovag": 1150 
  };

  // Számok kezelése (darabszám megadása)
  const handleNumber = (num) => {
    setFinalShow(false);
    // Ha 0-t vagy 1-et látunk, cseréljük, egyébként fűzzük hozzá
    setQuantity(prev => (prev === "0" || prev === "1" ? String(num) : prev + num));
  };

  // Kategória kiválasztása (művelet elvégzése: db * ár)
  const handleCategory = (cat) => {
    setFinalShow(false);
    const calculated = parseInt(quantity) * prices[cat];
    setSubTotal(calculated);
  };

  // A "+" gomb: hozzáadja az aktuális tételt a kosárhoz
  const handlePlus = () => {
    setTotal(prev => prev + subTotal);
    setSubTotal(0);
    setQuantity("1");
  };

  // Az "=" gomb: lezárja a számítást és megmutatja a végösszeget
  const handleEquals = () => {
    const final = total + subTotal;
    setTotal(final);
    setSubTotal(0);
    setQuantity("1");
    setFinalShow(true);
  };

  // Törlés (C gomb)
  const clearAll = () => {
    setTotal(0);
    setSubTotal(0);
    setQuantity("1");
    setFinalShow(false);
  };

  return (
    <div className="calculator">
      {/* Kijelző terület */}
      <div className="calculator-input">
        <div style={{ fontSize: "0.75rem", color: "gray", minHeight: "1rem" }}>
          {finalShow ? "Fizetendő összesen:" : `Kosár: ${total} Ft | Darab: ${quantity}`}
        </div>
        <div className="result">
          {finalShow ? `${total} Ft` : (subTotal > 0 ? `${subTotal} Ft` : `${total} Ft`)}
        </div>
      </div>
      
      {/* Billentyűzet rács */}
      <div className="calculator-keypad">
        {/* Funkció gombok */}
        <div className="keys-function">
          <CompButton keyValue={"C"} onClick={clearAll} />
        </div>
        
        {/* Operátorok / Kategóriák oszlopa */}
        <div className="keys-operators">
          {Object.keys(prices).map(cat => (
            <CompButton key={cat} keyValue={cat} onClick={handleCategory} />
          ))}
          <CompButton keyValue={"+"} onClick={handlePlus} className="plus-btn" />
          <CompButton keyValue={"="} onClick={handleEquals} className="equals-btn" />
        </div>

        {/* Számológép gombok */}
        <div className="keys-numbers">
          {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map(num => (
            <CompButton 
              key={num} 
              keyValue={num} 
              onClick={handleNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PizzaCalculator;