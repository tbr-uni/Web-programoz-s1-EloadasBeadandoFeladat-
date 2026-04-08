import React, { useState } from "react";
import CompButton from "./CompButton";

function PizzaStats() {
  const [result, setResult] = useState(null);

  // A teljes 74 elemű lista a pizza.txt alapján
  const pizzas = [
    { nev: "Áfonyás", k: "király" }, { nev: "Babos", k: "lovag" }, { nev: "Barbecue chicken", k: "lovag" },
    { nev: "Betyáros", k: "király" }, { nev: "Caribi", k: "apród" }, { nev: "Country", k: "király" },
    { nev: "Csabesz", k: "király" }, { nev: "Csupa sajt", k: "lovag" }, { nev: "Erdő kapitánya", k: "apród" },
    { nev: "Erős János", k: "lovag" }, { nev: "Excellent", k: "király" }, { nev: "Főnök kedvence", k: "lovag" },
    { nev: "Francia", k: "főnemes" }, { nev: "Frankfurti", k: "király" }, { nev: "Füstös", k: "lovag" },
    { nev: "Gino", k: "király" }, { nev: "Gombás", k: "apród" }, { nev: "Góré", k: "lovag" },
    { nev: "Görög", k: "király" }, { nev: "Gyros pizza", k: "király" }, { nev: "HamAndEggs", k: "lovag" },
    { nev: "Hamm", k: "lovag" }, { nev: "Hawaii", k: "főnemes" }, { nev: "Hellas", k: "király" },
    { nev: "Hercegnő", k: "király" }, { nev: "Ilike", k: "lovag" }, { nev: "Ínyenc", k: "lovag" },
    { nev: "Jázmin álma", k: "lovag" }, { nev: "Jobbágy", k: "király" }, { nev: "Juhtúrós", k: "lovag" },
    { nev: "Kagylós", k: "király" }, { nev: "Kétszínű", k: "lovag" }, { nev: "Kiadós", k: "király" },
    { nev: "Király pizza", k: "király" }, { nev: "Kívánság", k: "lovag" }, { nev: "Kolbászos", k: "apród" },
    { nev: "Lagúna", k: "király" }, { nev: "Lecsó", k: "király" }, { nev: "Maffiózó", k: "lovag" },
    { nev: "Magvas", k: "király" }, { nev: "Magyaros", k: "lovag" }, { nev: "Máj Fair Lady", k: "király" },
    { nev: "Mamma fia", k: "király" }, { nev: "Mexikói", k: "főnemes" }, { nev: "Mixi", k: "főnemes" },
    { nev: "Nikó", k: "király" }, { nev: "Nordic", k: "király" }, { nev: "Nyuszó-Muszó", k: "király" },
    { nev: "Pacalos", k: "lovag" }, { nev: "Pástétomos", k: "király" }, { nev: "Pásztor", k: "lovag" },
    { nev: "Pipis", k: "lovag" }, { nev: "Popey", k: "király" }, { nev: "Quattro", k: "király" },
    { nev: "Ráki", k: "király" }, { nev: "Rettenetes magyar", k: "lovag" }, { nev: "Röfi", k: "király" },
    { nev: "Sajtos", k: "apród" }, { nev: "So-ku", k: "apród" }, { nev: "Son-go-ku", k: "főnemes" },
    { nev: "Sonkás", k: "apród" }, { nev: "Spanyol", k: "király" }, { nev: "Spencer", k: "főnemes" },
    { nev: "Szalámis", k: "apród" }, { nev: "Szardíniás", k: "lovag" }, { nev: "Szerzetes", k: "király" },
    { nev: "Szőke kapitány", k: "király" }, { nev: "Tenger gyümölcsei", k: "király" }, { nev: "Tonhalas", k: "lovag" },
    { nev: "Törperős", k: "lovag" }, { nev: "Tündi kedvence", k: "király" }, { nev: "Tüzes halál", k: "király" },
    { nev: "Vega", k: "lovag" }, { nev: "Zöldike", k: "főnemes" }
  ];

  const showStats = (cat) => {
    const count = pizzas.filter(p => p.k === cat).length;
    setResult({ name: cat, count: count });
  };

  return (
    <div className="text-center p-3" style={{backgroundColor: "#f8f9fa", borderRadius: "10px"}}>
      <h3>Kategória Számláló</h3>
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
        {["apród", "lovag", "király", "főnemes"].map(c => (
          <CompButton key={c} keyValue={c} onClick={showStats} />
        ))}
      </div>
      {result && (
        <div className="alert alert-info">
          A(z) <strong>{result.name}</strong> kategóriában <strong>{result.count}</strong> db pizza található.
        </div>
      )}
    </div>
  );
}
export default PizzaStats;