import React from "react";
import { useLocation } from "react-router-dom";
import OptionHeader, { Footer } from "./Option";


export function PriceHeader() {
    return(
  <OptionHeader />
    )
}

export function PriceBody() {
    const location = useLocation();
    const pizzaData = location.state; 
   
    const calculatePrice = ({ Size, Crust, Toppings, Quantity }) => {
        const basePrices = {
            Small: 5,
            Medium: 8,
            Large: 12,
            'Extra Large': 15,
        };

        const crustPrices = {
            'Thin Crust': 1,
            'Hand-Tossed': 1.5,
            'Stuffed Crust': 2,
            'Gluten-Free': 2.5,
        };

        const toppingPrice = 0.5;

        const numToppings = Object.values(Toppings).filter((value) => value === true).length;

        const basePrice = basePrices[Size] || 0;
        const crustPrice = crustPrices[Crust] || 0;
        const totalToppingPrice = numToppings * toppingPrice;

        const totalPrice = (basePrice + crustPrice + totalToppingPrice) * Quantity;
        return totalPrice.toFixed(2);
    };

    
    const totalPrice = calculatePrice(pizzaData);

    return (
        <div  style={{
            backgroundImage: 'url("/pizza6.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '88vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <div className="container mt-5" >
            <h2 className="text-center text-uppercase mb-4" style={{color : 'white'}}>Your Pizza Order</h2>
            <div className="p-4 bg-white rounded shadow">
                <h3>Pizza Summary</h3>
                <p><strong>Method:</strong> {pizzaData.Method}</p>
                <p><strong>Size:</strong> {pizzaData.Size}</p>
                <p><strong>Crust:</strong> {pizzaData.Crust}</p>
                <p><strong>Quantity:</strong> {pizzaData.Quantity}</p>
                <p><strong>Toppings:</strong></p>
                <ul>
                    {Object.keys(pizzaData.Toppings).map((topping) => (
                        pizzaData.Toppings[topping] && <li key={topping}>{topping}</li>
                    ))}
                </ul>
                <h4>Total Price: {totalPrice} DT</h4>
                <div className="d-grid">
              <input  className="btn btn-warning" type="submit" value="Purchase" />
            </div>
            </div>
        </div>
        </div>
    );
}

export function PriceFooter(){
    return(
        <Footer/>
    )
}