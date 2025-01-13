import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/*export default function LogInHeader() {
  return (
    <nav>
      <div className="d-flex justify-content-between align-items-center" style={{ minHeight: '10vh' }}>
        <h1>PIZZA TIME</h1>
        <p className="fs-5">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </nav>
  );
}*/

export function LogInForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const logindata = {
      email,
      password,
    };

    axios
      .post('http://localhost:5000/api/user/login', logindata)
      .then((result) => {
        console.log(result.data);
        if (result.data.success) {
          //alert('User logged in successfully!');
          navigate('/option');
        } else {
          setError(result.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert('An error occurred during login.');
      });
  };

  return (
    <section className="vh-100" style={{backgroundImage :'url("/pizza6.png")'}}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="/pizza14.png"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height: '700px', width: 'auto' } } 
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div>
                    <Link to="/" className="navbar-brand d-flex align-items-center">
                      <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="Pizza Time Logo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />
                       <span className="fw-bold fs-1 " style={{color : '#FFC300 '}}>PIZZA PARADISE</span>
                      </Link>
                      </div>
                      <br/>
                      <br/>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                      </div>

                      {error && <p className="text-danger">{error}</p>}

                      <div className="pt-1 mb-4 d-grid">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-dark"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                  
                      <p className="mb-5 pb-lg-2 center-text" style={{ color: '#393f81' }}>
                        Don't have an account?{' '}
                        <Link to="/signup" style={{ color: '#393f81' }}>
                          Register here
                        </Link>
                      </p>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
