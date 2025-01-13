const Pizza = require('../models/Pizza');
const jwt = require('jsonwebtoken');

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
  return totalPrice;
};

const registerPizza = async (req, res) => {
  try {
    const { Method, Size, Crust, Quantity, Toppings } = req.body;

    const Price = calculatePrice({ Size, Crust, Toppings, Quantity });

    const newPizza = new Pizza({
      Method,
      Size,
      Crust,
      Quantity,
      Toppings,
      Price,
    });

    const savedPizza = await newPizza.save();

    res.status(201).json({ message: 'Pizza registered successfully', pizza: savedPizza });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
};

/*module.exports = { registerPizza };*/
// Contrôleur pour récupérer toutes les pizzas
const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find(); // Récupération de toutes les pizzas
    res.status(200).json(pizzas); // Envoi des pizzas en réponse
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des pizzas', error: error.message });
  }
};

module.exports = { registerPizza, getAllPizzas };