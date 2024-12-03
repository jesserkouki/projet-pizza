const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/UserRoutes');

dotenv.config();
connectDB();
const app = express();

//Middleware 
app.use(cors({
    origin: 'http://localhost:3000', // Frontend React
    methods: ['GET', 'POST'],
  }));//Pour autoriser les requetes cross-origin
app.use(express.json()); //Pour analyser les requetes JSON

//Routes
app.use('/api/user', authRoutes);

//Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'execution sur le port ${PORT}`);
});
