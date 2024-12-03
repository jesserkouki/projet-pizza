const User = require('../models/Users');
const jwt = require ('jsonwebtoken');

// Enregistrer un utilisateur
const registerUser = async (req, res) => {
     
      const { firstname, lastname, email, adresse, city, state, password } = req.body;

  try {
    // Vérification si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email }, );
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }
  
    
    // Créer un nouvel utilisateur
    const newUser = new User({
      firstname,
      lastname,
      email,
      adresse,
      city,
      state,
      password,
    });

    // Enregistrer l'utilisateur dans la base de données
    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

// Connexion de l'utilisateur (à ajouter si nécessaire)
const loginUser = async (req, res) => {

  const { email , password } = req. body;
    try {
        const user = await User. findOne({ email });
        if (!user) return res.status (404).json({ message: 'Utilisateur non trouvé' }) ;
        const isMatch = await user.matchPassword (password) ;

        if (!isMatch) return res.status (400).json({ message: 'Mot de passe incorrect' });


       res.status(200).json({message:"Connexion Réussi"})
    } catch (error) {
        res.status (500). json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };
