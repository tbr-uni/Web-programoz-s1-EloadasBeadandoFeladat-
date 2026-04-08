import React from "react";

const PizzaTable = props => (
  <table className="list">
    <thead>
      <tr>
        <th>Név</th>
        <th>Kategória</th>
        <th>Vega?</th>
        <th>Műveletek</th>
      </tr>
    </thead>
    <tbody>
      {props.pizzas.length > 0 ? (
        props.pizzas.map(pizza => (
          <tr key={pizza.id}>
            <td>{pizza.nev}</td>
            <td>{pizza.kategorianev}</td>
            <td>{pizza.vegetarianus ? "Igen" : "Nem"}</td>
            <td>
              <button onClick={() => props.editRow(pizza)}>Szerkeszt</button>
              <button onClick={() => props.deletePizza(pizza.id)}>Töröl</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>Nincs megjeleníthető pizza.</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default PizzaTable;