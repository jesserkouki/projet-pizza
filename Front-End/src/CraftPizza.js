import React, { useState } from "react"
import OptionHeader, { Footer } from "./Option"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PizzaHeader(){
    return(
          <OptionHeader/>
    )
}

export function PizzaBody(){
    const navigate = useNavigate();
    const [Method , setMethod] = useState();
    const [Size, setSize] = useState();
    const [Crust, setCrust] = useState();
    const [Quantity, setQuantity] = useState();
    const [Toppings, setToppings] = useState({
        pepperoni: false,
        sausage: false,
        bacon: false,
        chicken: false,
        bellPeppers: false,
        onions: false,
        mushrooms: false,
        spinach: false,
        olives: false,
        jalapenos: false,
        extraCheese: false,
        pestoDrizzle: false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setToppings((prevToppings) => ({
          ...prevToppings,
          [name]: checked,
        }));
      };
    
    const HandlePizza = (e) =>{
        e.preventDefault();

        const pizzaData = {
            Method,
            Size,
            Crust,
            Quantity,
            Toppings,
        }

        axios
      .post('http://localhost:5000/api/pizza/register', pizzaData) 
      .then((result) => {
        console.log(result.data);
        //alert("Pizza registered successfully!");
        navigate('/price', { state: pizzaData });
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during registration.");
      });
    }
   
      
    return(
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
            <h2 className="text-center text-uppercase mb-4" style={{color : 'white'}}>CRAFT-A-PIZZA</h2>
            <form className="p-4 bg-white rounded shadow  " onSubmit={HandlePizza} >
                <div className="mb-3">
                <label className="form-label">Method</label>
                <select className="form-select" onChange={(e) => setMethod (e.target.value)} >
                    <option>Choice your Method</option>
                    <option>Neapolitan Pizza </option>
                    <option>Stone-Baked Pizza</option>
                    <option>Sheet Pan Pizza</option>
                    <option>Stuffed Crust Pizza </option>
                    <option>Cast Iron Pizza</option>
                    <option>Grilled Pizza</option>
                </select>
                </div>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label className="form-label">Size</label>
                    <select className="form-select"  onChange={(e) => setSize (e.target.value)} >
                        <option>Small </option>
                        <option>Medium </option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                    </div>
                    <div className="col-md-4">
                    <label className="form-label">Crust</label>
                    <select className="form-select"  onChange={(e) => setCrust (e.target.value)}>
                        <option>Thin Crust </option>
                        <option>Hand-Tossed </option>
                        <option>Stuffed Crust </option>
                        <option>Gluten-Free</option>
                    </select>
                    </div>
                    
                <div className="col-md-4">
                    <label className="form-label">Quantity</label>
                    <input type="number" className="form-control" min="1"  onChange={(e) => setQuantity (e.target.value)}/>
                </div>
                </div>
                <div>
                <fieldset className="mb-3">
                    <legend>Toppings</legend>
                    <div className="row">
                        <div className="col-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="pepperoni"checked={Toppings.pepperoni}onChange={handleCheckboxChange}/>
                                <label className="form-check-label" >Pepperoni</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="sausage" checked={Toppings.sausage} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Sausage</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="bacon" checked={Toppings.bacon} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Bacon</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="chicken" checked={Toppings.chicken} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Chicken</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="bellPeppers" checked={Toppings.bellPeppers} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Bell Peppers</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="onions" checked={Toppings.onions} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Onions</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="mushrooms" checked={Toppings.mushrooms} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Mushrooms</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="spinach" checked={Toppings.spinach} onChange={handleCheckboxChange} />
                                <label className="form-check-label">Spinach</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="olives" checked={Toppings.olives} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Olives</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="jalapenos" checked={Toppings.jalapenos} onChange={handleCheckboxChange} />
                                <label className="form-check-label">Jalapeños</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="extraCheese" checked={Toppings.extraCheese} onChange={handleCheckboxChange} />
                                <label className="form-check-label" >Extra Cheese</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="pestoDrizzle" checked={Toppings.pestoDrizzle} onChange={handleCheckboxChange} />
                                <label className="form-check-label">Pessto Drizzle</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <div className="text-center d-grid gap-3">
                    <input type="submit" className="btn btn-outline-dark" value="ADD TO ORDER"  />
                </div>
                </div>
            </form>
           </div>
           </div>
    )
}

export function PizzaFooter(){
    return(
        <Footer />
    )
}