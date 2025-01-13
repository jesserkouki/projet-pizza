const express = require('express');
const { registerPizza, getAllPizzas  } = require('../controllers/PizzaController');

const router = express.Router();

router.post('/register', registerPizza);
router.get('/all', getAllPizzas); 

module.exports = router;