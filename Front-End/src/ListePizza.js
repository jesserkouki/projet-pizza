import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function ListePizza() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pizza/all')
      .then(response => {
        setPizzas(response.data); 
        const lastFivePizzas = response.data.slice(-4);
        setPizzas(lastFivePizzas); 
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des pizzas:', error);
      });
  }, []);

  const handleBuyPizza = (pizzaId) => {
    alert(`enter your card to pay`);
  };

  return (
    <div className="container  d-flex justify-content-center">
      <div className="row w-100">
        
          <div className="p-4 bg-white rounded shadow">
            <span className="fw-bold fs-3 d-flex justify-content-center align-items-center" style={{ color: 'black' }}>
              LIST OF PIZZAS
            </span>
            <ul className="list-group mt-3">
              {pizzas.map((pizza) => (
                <li key={pizza._id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <p><strong>Method:</strong> {pizza.Method}</p>
                    <p><strong>Size:</strong> {pizza.Size}</p>
                    <p><strong>Crust:</strong> {pizza.Crust}</p>
                    <p><strong>Quantity:</strong> {pizza.Quantity}</p>
                    <p><strong>Toppings:</strong> {Object.keys(pizza.Toppings).join(', ')}</p>
                    <p><strong>Price:</strong> {pizza.Price}€</p>
                  </div>
                  <button onClick={() => handleBuyPizza(pizza._id)} className="btn btn-warning">Purchase</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
  );
}