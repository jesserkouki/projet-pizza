import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function SignUpHeader() {
  return (
    <nav>
      <h1>PIZZA PETE'S</h1>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </nav>
  );
}

export function SignUpForm() {
  const[firstname, setFirstName] = useState()
  const[lastname, setLastName] = useState()
  const[email, setEmail] = useState()
  const[adresse, setAdresse] = useState()
  const[city, setCity] = useState()
  const[state, setState] = useState()
  const[password, setPassword] = useState()
  const[confirm, setConfirm] = useState()

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
  
    // Préparer les données utilisateur
    const userData = {
      firstname,
      lastname,
      email,
      adresse,
      city,
      state,
      password,
    };
  
    // Vérifier si les mots de passe correspondent
    if (password !== confirm) {
      console.error("Passwords do not match!");
      alert("Passwords do not match!");
      return;
    }
  
    // Envoyer les données au backend
    axios
      .post('http://localhost:5000/api/user/register', userData) // URL API backend
      .then((result) => {
        console.log(result.data);
        alert("User registered successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during registration.");
      });
  };
  
  return (
    <div  className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="p-4 bg-white rounded shadow w-100" style={{ maxWidth: '1000px' }} onSubmit={handleSubmit}>
        <label  className="form-label">First Name</label>
        <input  className="form-control"  type="text" onChange={(e) => setFirstName(e.target.value)} />
        <label className="form-label">Last Name</label>
        <input type="text" className="form-control"  onChange={(e) => setLastName(e.target.value)} />
        <div>
          <label className="form-label">Email</label>
          <input className="form-control"  type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="form-label">Address</label>
          <input className="form-control"  type="text" onChange={(e) => setAdresse(e.target.value)} />
        </div>
        <div>
          <label className="form-label">City</label>
          <input className="form-control"  type="text" onChange={(e) => setCity(e.target.value)} />
          <label className="form-label">State</label>
          <input className="form-control" type="text" onChange={(e) => setState(e.target.value)} />
            
        </div>
        <div>
          <label className="form-label">Password</label>
          <input className="form-control"  type="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label className="form-label">Confirm Password</label>
          <input className="form-control"  type="password" onChange={(e) => setConfirm(e.target.value)} />
        </div>
        <br/>
        <div className="d-grid">
        <input  className="btn btn-primary btn-block" type="submit" value="SignUp" />
        </div>
      </form>
    </div>
  );
};
