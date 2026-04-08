import React, { useState, useEffect } from "react";

const EditPizzaForm = props => {
  const [pizza, setPizza] = useState(props.currentPizza);

  useEffect(() => {
    setPizza(props.currentPizza);
  }, [props.currentPizza]);

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    setPizza({ ...pizza, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updatePizza(pizza.id, pizza);
      }}
    >
      <label>Pizza neve</label>
      <input type="text" name="nev" value={pizza.nev} onChange={handleInputChange} />
      
      <label>Kategória</label>
      <input type="text" name="kategorianev" value={pizza.kategorianev} onChange={handleInputChange} />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
        <label>Vegetáriánus?</label>
        <input type="checkbox" name="vegetarianus" checked={pizza.vegetarianus} onChange={handleInputChange} />
      </div>

      <div className="form-action-buttons">
        <button type="submit">Frissítés</button>
        <button onClick={() => props.setEditing(false)} style={{ backgroundColor: '#ccc', color: 'black' }}>
          Mégse
        </button>
      </div>
    </form>
  );
};

export default EditPizzaForm;