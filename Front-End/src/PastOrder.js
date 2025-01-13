import React from "react";
import OptionHeader from "./Option";
import ListePizza from "./ListePizza";

export function PastHeader() {
  return (
    <OptionHeader />
  );
}

export function PastBody() {
  return (
    <div 
      style={{
        minHeight: '100vh', // Assure que l'image couvre toute la hauteur de la page
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'url("/pizza6.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="row w-100 m-5">
        <div className="col-md-6">
          <form className="p-4 bg-white rounded shadow">
            <span className="fw-bold fs-3 d-flex justify-content-center align-items-center" style={{ color: 'black' }}>
              ACCOUNT UPDATE
            </span>
            <br />
            <label className="form-label">First Name</label>
            <input className="form-control" type="text" />
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
            <div>
              <label className="form-label">Email</label>
              <input className="form-control" type="email" />
            </div>
            <div>
              <label className="form-label">Address</label>
              <input className="form-control" type="text" />
            </div>
            <div>
              <label className="form-label">City</label>
              <input className="form-control" type="text" />
              <label className="form-label">State</label>
              <input className="form-control" type="text" />
            </div>
            <div className="d-grid">
              <input className="btn btn-warning" type="submit" value="UPDATE" />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <ListePizza />
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <Footer />
  );
}
