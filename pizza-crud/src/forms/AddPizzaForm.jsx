import React, { useState } from "react";

const AddPizzaForm = props => {
  const initialFormState = { id: null, nev: "", kategorianev: "", vegetarianus: false };
  const [pizza, setPizza] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    setPizza({ ...pizza, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!pizza.nev || !pizza.kategorianev) return;
        props.addPizza(pizza);
        setPizza(initialFormState);
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
        <button type="submit">Hozzáadás</button>
      </div>
    </form>
  );
};

export default AddPizzaForm;