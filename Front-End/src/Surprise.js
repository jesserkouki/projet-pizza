import { useState } from 'react';
import OptionHeader, { Footer } from './Option';

export function SurpriseHeader(){
    return(
        <OptionHeader />
    )
}

export default function SurpriseBody() {
    const [method, setMethod] = useState('');
    const [size, setSize] = useState('');
    const [crust, setCrust] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [toppings, setToppings] = useState({
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
    const [price, setPrice] = useState(0);

    // Constantes pour les prix
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

    const toppingPrice = 0.5; // Prix par topping

    // Fonction pour calculer le prix total
    const calculatePrice = (selectedToppings) => {
        // Vérifier si la taille et la croûte sont définies
        const basePrice = basePrices[size] || 0;
        const crustPrice = crustPrices[crust] || 0;

        let toppingCost = 0;
        for (let topping in selectedToppings) {
            if (selectedToppings[topping]) {
                toppingCost += toppingPrice; // Chaque topping coûte toppingPrice
            }
        }

        const totalPrice = (basePrice + crustPrice + toppingCost) * quantity; // Multiplication par la quantité
        setPrice(totalPrice);
    };

    // Fonction pour générer des ingrédients aléatoires
    const surpriseMe = () => {
        // Choix aléatoire des valeurs pour méthode, taille, croûte et toppings
        const methods = ['Neapolitan Pizza', 'Stone-Baked Pizza', 'Sheet Pan Pizza', 'Stuffed Crust Pizza', 'Cast Iron Pizza', 'Grilled Pizza'];
        const sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
        const crusts = ['Thin Crust', 'Hand-Tossed', 'Stuffed Crust', 'Gluten-Free'];

        const randomMethod = methods[Math.floor(Math.random() * methods.length)];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        const randomCrust = crusts[Math.floor(Math.random() * crusts.length)];

        // Randomiser les toppings
        const allToppings = [
            'pepperoni', 'sausage', 'bacon', 'chicken', 'bellPeppers', 'onions',
            'mushrooms', 'spinach', 'olives', 'jalapenos', 'extraCheese', 'pestoDrizzle'
        ];

        let randomToppings = {};
        allToppings.forEach(topping => {
            randomToppings[topping] = Math.random() > 0.5; // 50% de chance que chaque topping soit sélectionné
        });

        // Mettre à jour l'état avec les valeurs générées aléatoirement
        setMethod(randomMethod);
        setSize(randomSize);
        setCrust(randomCrust);
        setToppings(randomToppings);

        // Calculer le prix avec les ingrédients sélectionnés
        calculatePrice(randomToppings);
    };

    return (
        <div  style={{
            backgroundImage: 'url("/pizza6.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '88vh', // S'assure que le fond couvre toute la hauteur visible
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <div className="container mt-5">
            <h2 className="text-center text-uppercase mb-4" style={{color:'white'}}>Surprise ME</h2>
            <form className="p-4 bg-white rounded shadow">
                <div className="mb-3">
                    <label className="form-label">Method</label>
                    <input type="text" className="form-control" value={method} disabled />
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label className="form-label">Size</label>
                        <input type="text" className="form-control" value={size} disabled />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Crust</label>
                        <input type="text" className="form-control" value={crust} disabled />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" min="1" value={quantity} disabled />
                    </div>
                </div>

                <div>
                    <fieldset className="mb-3">
                        <legend>Toppings</legend>
                        <div className="row">
                            {Object.keys(toppings).map((topping) => (
                                <div className="col-4" key={topping}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name={topping}
                                            checked={toppings[topping]}
                                            disabled
                                        />
                                        <label className="form-check-label">{topping.replace(/([A-Z])/g, ' $1').toUpperCase()}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className="text-center d-grid gap-3">
                    <button type="button" className="btn btn-warning" onClick={surpriseMe}>Surprise Me!</button>
                </div>
            </form>

            <div className="mt-3 text-center">
                <h3 style={{color : 'white'}}>Total Price: {price} DT</h3>
            </div>
        </div>
        </div>
    );
}
export function SurpriseFooter(){
return(
    <Footer/>
)
}

