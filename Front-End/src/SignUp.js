import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/*export default function SignUpHeader() {
  return (
    <nav>
      <div className="d-flex justify-content-between align-items-center" style={{ minHeight: '10vh' }}>
        <h1>PIZZA TIME</h1>
        <p className="fs-5">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </nav>
  );
}*/

export function SignUpForm() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      email,
      adresse,
      city,
      state,
      password,
    };

    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    axios
      .post('http://localhost:5000/api/user/register', userData)
      .then(() => {
        alert('User registered successfully!');
        navigate('/login');
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred during registration.');
      });
  };

  return (
    <section className="text-center">
      
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: "url('/pizza3.png')",
          
          height: '250px',
        }}
      ></div>

    
      <div
        className="card mx-4 mx-md-5 shadow-5-strong "
        style={{
          marginTop: '-100px',
          backdropFilter: 'blur(30px)',
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div>
               <Link to="/" className="navbar-brand d-flex align-items-center">
                <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="Pizza Time Logo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />
                <span className="fw-bold fs-3 " style={{color : 'black'}}>Sign Up Now</span>
                </Link>
                </div>
                <br/>
                <br/>
              <form onSubmit={handleSubmit}>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      placeholder="First name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      id="form3Example2"
                      className="form-control"
                      placeholder="Last name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

             
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control mb-4"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  id="form3Example4"
                  className="form-control mb-4"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

               
                <input
                  type="password"
                  id="form3Example5"
                  className="form-control mb-4"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirm(e.target.value)}
                />

          
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Address"
                  onChange={(e) => setAdresse(e.target.value)}
                />

                {/* City and State */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                </div>

                <p className="mb-5 pb-lg-2 center-text" style={{ color: '#393f81' }}>
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#393f81' }}>
                Login
                </Link>
                </p>

              
                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
