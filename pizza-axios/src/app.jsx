import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [orders, setOrders] = useState([]);
  const [visibleCount, setVisibleCount] = useState(50); // 50-es limit
  const [message, setMessage] = useState("");
  const [pizzanev, setPizzanev] = useState("");
  const [darab, setDarab] = useState("");
  const [felvetel, setFelvetel] = useState("");
  const [kiszallitas, setKiszallitas] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => { fetchOrders(); }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("api.php");
      const sorted = res.data.readData.sort((a, b) => b.az - a.az);
      setOrders(sorted);
    } catch (e) { console.error("Hiba az adatok lekérésekor", e); }
  };

  const resetForm = () => {
    setEditId(null);
    setPizzanev(""); setDarab(""); setFelvetel(""); setKiszallitas("");
  };

  const submit = async () => {
    const payload = { az: editId, pizzanev, darab, felvetel, kiszallitas };
    let res;
    if (editId) {
      res = await axios.put("api.php", payload);
    } else {
      res = await axios.post("api.php", payload);
    }
    setMessage(res.data.status);
    resetForm();
    fetchOrders();
  };

  const deleteOrder = async (az) => {
    if (confirm("Biztosan törlöd a rendelést?")) {
      const res = await axios.delete("api.php", { data: { az } });
      setMessage(res.data.status);
      fetchOrders();
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 50);
  };

  return (
    <div>
     
      <header className="bg-dark text-white py-4">
        <div className="container text-center">
          <h1>Web programozás-1 Előadás Házi feladat</h1>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/javascript.html">JAVASCRIPT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/react.html">REACT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/spa.html">SPA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fetchapi.html">FETCHAPI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/axios.html">AXIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/oojs.html">OOJS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        {message && <div className="alert alert-success alert-dismissible fade show">{message}</div>}
        <div className="card p-3 mb-4 shadow-sm bg-light">
          <h3>{editId ? "Rendelés módosítása" : "Új pizza rendelés"}</h3>
          <div className="row g-2">
            <div className="col-md-3">
              <input className="form-control" placeholder="Pizza neve" value={pizzanev} onChange={e => setPizzanev(e.target.value)} />
            </div>
            <div className="col-md-1">
              <input className="form-control" type="number" placeholder="Db" value={darab} onChange={e => setDarab(e.target.value)} />
            </div>
            <div className="col-md-3">
              <input className="form-control" type="datetime-local" value={felvetel} onChange={e => setFelvetel(e.target.value)} />
            </div>
            <div className="col-md-3">
              <input className="form-control" type="datetime-local" value={kiszallitas} onChange={e => setKiszallitas(e.target.value)} />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary w-100" onClick={submit}>
                {editId ? "Mentés" : "Felvétel"}
              </button>
              {editId && (
                <button className="btn btn-danger w-100 mt-1" onClick={resetForm}>Mégse</button>
              )}
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover border">
            <thead className="table-dark">
              <tr>
                <th>Rendelés azonosító</th>
                <th>Pizza név</th>
                <th>Darab</th>
                <th>Felvétel</th>
                <th>Kiszállítás</th>
                <th>Műveletek</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, visibleCount).map(o => (
                <tr key={o.az}>
                  <td>{o.az}</td>
                  <td>{o.pizzanev}</td>
                  <td>{o.darab} db</td>
                  <td>{o.felvetel}</td>
                  <td>{o.kiszallitas}</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-1" onClick={() => { 
                      setEditId(o.az); setPizzanev(o.pizzanev); setDarab(o.darab); 
                      setFelvetel(o.felvetel); setKiszallitas(o.kiszallitas); 
                    }}>Szerkeszt</button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteOrder(o.az)}>Töröl</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {visibleCount < orders.length && (
          <div className="text-center my-4">
            <button className="btn btn-outline-secondary px-5" onClick={loadMore}>
              További 50 rendelés betöltése... (Összesen: {orders.length})
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
