import React, { useState } from "react";
import PizzaTable from "./tables/PizzaTable";
import EditPizzaForm from "./forms/EditPizzaForm";
import AddPizzaForm from "./forms/AddPizzaForm";

const App = () => {
    const initialPizzas = [
    { id: 1, nev: "Áfonyás", kategorianev: "király", vegetarianus: false },
    { id: 2, nev: "Babos", kategorianev: "lovag", vegetarianus: false },
    { id: 3, nev: "Barbecue chicken", kategorianev: "lovag", vegetarianus: false },
    { id: 4, nev: "Betyáros", kategorianev: "király", vegetarianus: false },
    { id: 5, nev: "Caribi", kategorianev: "apród", vegetarianus: false },
    { id: 6, nev: "Country", kategorianev: "király", vegetarianus: false },
    { id: 7, nev: "Csabesz", kategorianev: "király", vegetarianus: false },
    { id: 8, nev: "Csupa sajt", kategorianev: "lovag", vegetarianus: true },
    { id: 9, nev: "Erdő kapitánya", kategorianev: "apród", vegetarianus: false },
    { id: 10, nev: "Erős János", kategorianev: "lovag", vegetarianus: false },
    { id: 11, nev: "Excellent", kategorianev: "király", vegetarianus: false },
    { id: 12, nev: "Főnök kedvence", kategorianev: "lovag", vegetarianus: false },
    { id: 13, nev: "Francia", kategorianev: "főnemes", vegetarianus: false },
    { id: 14, nev: "Frankfurti", kategorianev: "király", vegetarianus: false },
    { id: 15, nev: "Füstös", kategorianev: "lovag", vegetarianus: false },
    { id: 16, nev: "Gino", kategorianev: "király", vegetarianus: false },
    { id: 17, nev: "Gombás", kategorianev: "apród", vegetarianus: true },
    { id: 18, nev: "Góré", kategorianev: "lovag", vegetarianus: false },
    { id: 19, nev: "Görög", kategorianev: "király", vegetarianus: false },
    { id: 20, nev: "Gyros pizza", kategorianev: "király", vegetarianus: false },
    { id: 21, nev: "HamAndEggs", kategorianev: "lovag", vegetarianus: false },
    { id: 22, nev: "Hamm", kategorianev: "lovag", vegetarianus: false },
    { id: 23, nev: "Hawaii", kategorianev: "főnemes", vegetarianus: false },
    { id: 24, nev: "Hellas", kategorianev: "király", vegetarianus: false },
    { id: 25, nev: "Hercegnő", kategorianev: "király", vegetarianus: false },
    { id: 26, nev: "Ilike", kategorianev: "lovag", vegetarianus: false },
    { id: 27, nev: "Ínyenc", kategorianev: "lovag", vegetarianus: false },
    { id: 28, nev: "Jázmin álma", kategorianev: "lovag", vegetarianus: false },
    { id: 29, nev: "Jobbágy", kategorianev: "király", vegetarianus: false },
    { id: 30, nev: "Juhtúrós", kategorianev: "lovag", vegetarianus: false },
    { id: 31, nev: "Kagylós", kategorianev: "király", vegetarianus: false },
    { id: 32, nev: "Kétszínű", kategorianev: "lovag", vegetarianus: false },
    { id: 33, nev: "Kiadós", kategorianev: "király", vegetarianus: false },
    { id: 34, nev: "Király pizza", kategorianev: "király", vegetarianus: false },
    { id: 35, nev: "Kívánság", kategorianev: "lovag", vegetarianus: true },
    { id: 36, nev: "Kolbászos", kategorianev: "apród", vegetarianus: false },
    { id: 37, nev: "Lagúna", kategorianev: "király", vegetarianus: true },
    { id: 38, nev: "Lecsó", kategorianev: "király", vegetarianus: false },
    { id: 39, nev: "Maffiózó", kategorianev: "lovag", vegetarianus: false },
    { id: 40, nev: "Magvas", kategorianev: "király", vegetarianus: true },
    { id: 41, nev: "Magyaros", kategorianev: "lovag", vegetarianus: false },
    { id: 42, nev: "Máj Fair Lady", kategorianev: "király", vegetarianus: false },
    { id: 43, nev: "Mamma fia", kategorianev: "király", vegetarianus: false },
    { id: 44, nev: "Mexikói", kategorianev: "főnemes", vegetarianus: false },
    { id: 45, nev: "Mixi", kategorianev: "főnemes", vegetarianus: true },
    { id: 46, nev: "Nikó", kategorianev: "király", vegetarianus: false },
    { id: 47, nev: "Nordic", kategorianev: "király", vegetarianus: false },
    { id: 48, nev: "Nyuszó-Muszó", kategorianev: "király", vegetarianus: false },
    { id: 49, nev: "Pacalos", kategorianev: "lovag", vegetarianus: false },
    { id: 50, nev: "Pástétomos", kategorianev: "király", vegetarianus: false },
    { id: 51, nev: "Pásztor", kategorianev: "lovag", vegetarianus: false },
    { id: 52, nev: "Pipis", kategorianev: "lovag", vegetarianus: false },
    { id: 53, nev: "Popey", kategorianev: "király", vegetarianus: false },
    { id: 54, nev: "Quattro", kategorianev: "király", vegetarianus: false },
    { id: 55, nev: "Ráki", kategorianev: "király", vegetarianus: false },
    { id: 56, nev: "Rettenetes magyar", kategorianev: "lovag", vegetarianus: false },
    { id: 57, nev: "Röfi", kategorianev: "király", vegetarianus: false },
    { id: 58, nev: "Sajtos", kategorianev: "apród", vegetarianus: true },
    { id: 59, nev: "So-ku", kategorianev: "apród", vegetarianus: false },
    { id: 60, nev: "Son-go-ku", kategorianev: "főnemes", vegetarianus: true },
    { id: 61, nev: "Sonkás", kategorianev: "apród", vegetarianus: false },
    { id: 62, nev: "Spanyol", kategorianev: "király", vegetarianus: false },
    { id: 63, nev: "Spencer", kategorianev: "főnemes", vegetarianus: false },
    { id: 64, nev: "Szalámis", kategorianev: "apród", vegetarianus: false },
    { id: 65, nev: "Szardíniás", kategorianev: "lovag", vegetarianus: false },
    { id: 66, nev: "Szerzetes", kategorianev: "király", vegetarianus: false },
    { id: 67, nev: "Szőke kapitány", kategorianev: "király", vegetarianus: false },
    { id: 68, nev: "Tenger gyümölcsei", kategorianev: "király", vegetarianus: false },
    { id: 69, nev: "Tonhalas", kategorianev: "lovag", vegetarianus: false },
    { id: 70, nev: "Törperős", kategorianev: "lovag", vegetarianus: false },
    { id: 71, nev: "Tündi kedvence", kategorianev: "király", vegetarianus: false },
    { id: 72, nev: "Tüzes halál", kategorianev: "király", vegetarianus: false },
    { id: 73, nev: "Vega", kategorianev: "lovag", vegetarianus: true },
    { id: 74, nev: "Zöldike", kategorianev: "főnemes", vegetarianus: true }
  ].map(p => ({
    ...p,
    vegetarianus: p.vegetarianus === 1 || p.vegetarianus === true 
  }));

  const [pizzas, setPizzas] = useState(initialPizzas);
  const [currentPizza, setCurrentPizza] = useState({ id: null, nev: "", kategorianev: "", vegetarianus: false });
  const [editing, setEditing] = useState(false);

  const addPizza = pizza => {
    pizza.id = pizzas.length > 0 ? Math.max(...pizzas.map(p => p.id)) + 1 : 1;
    setPizzas([...pizzas, pizza]);
  };

  const deletePizza = id => {
    setEditing(false);
    setPizzas(pizzas.filter(p => p.id !== id));
  };

  const editRow = pizza => {
    setEditing(true);
    setCurrentPizza(pizza);
  };

  const updatePizza = (id, updatedPizza) => {
    setEditing(false);
    setPizzas(pizzas.map(p => (p.id === id ? updatedPizza : p)));
  };

  return (
    <>
      {/* HEADER SZAKASZ */}
      <header className="bg-dark text-white py-4">
        <div className="container text-center">
          <h1>Web programozás-1 Előadás Házi feladat</h1>
        </div>
      </header>

      {/* NAVIGÁCIÓS SZAKASZ - React aktív állapotra állítva */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
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
                <a className="nav-link active" aria-current="page" href="react.html">REACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="spa.html">SPA</a>
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

      {/* CRUD ALKALMAZÁS TARTALMA */}
      <div className="container mt-4">
        <h1 className="text-center">Pizza CRUD Alkalmazás (React)</h1>
        <hr />
        <div className="row">
          <div className="col-md-5">
            <h2>{editing ? "Szerkesztés" : "Új pizza hozzáadása"}</h2>
            {editing ? (
              <EditPizzaForm
                setEditing={setEditing}
                currentPizza={currentPizza}
                updatePizza={updatePizza}
              />
            ) : (
              <AddPizzaForm addPizza={addPizza} />
            )}
          </div>
          <div className="col-md-7">
            <h2>Pizzák listája</h2>
            <div style={{ maxHeight: '600px', overflowY: 'auto', border: '1px solid #ddd', padding: '10px' }}>
              <PizzaTable pizzas={pizzas} editRow={editRow} deletePizza={deletePizza} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
