import React from 'react';
import { Link } from 'react-router-dom';

export default function LogInHeader() {
  return (
    <nav>
      <div className= "d-inline-flex"   >
      <h1>PIZZA PETE'S</h1>
       <p className="ml-80">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      </div>
    </nav>
  );
}

export function LogInForm() {
  return (
    <div  className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="p-4 bg-white rounded shadow w-100" style={{ maxWidth: '1000px' }} >
        <div>
          <h2 className="text-center">WELCOME BACK !!</h2>
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div>
          <label className="form-label">Password</label>
          <input type="password" className="form-control"/>
        </div> <br/>
        <div className="d-grid">
        <input type="submit"  className="btn btn-primary btn-block" value="LogIN" />
        </div>
      </form>
    </div>
  );
}
