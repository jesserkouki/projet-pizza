import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function OptionHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#f20b16 ', boxShadow: '0 2px 4px rgba(226, 14, 14, 0.1)' }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/logo1.png`} alt="Pizza Time Logo" style={{ width: '70px', height: '70px', marginRight: '10px' }} />
          <span className="fw-bold fs-3 " style={{color : '#FFC300 '}}>PIZZA PARADISE</span>
        </Link>

       

        <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <Link
        to="/option"
        className="nav-link fs-5 text-dark"
        style={{
          transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#007bff';
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
          e.target.style.border = '2px solid black'; // Contour noir
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
          e.target.style.border = 'none'; // Retirer le contour
        }}
      >
        HOME
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/craft"
        className="nav-link fs-5 text-dark"
        style={{
          transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#007bff';
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
          e.target.style.border = '2px solid black'; // Contour noir
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
          e.target.style.border = 'none'; // Retirer le contour
        }}
      >
        ORDER
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/past"
        className="nav-link fs-5 text-dark"
        style={{
          transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#007bff';
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
          e.target.style.border = '2px solid black'; // Contour noir
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
          e.target.style.border = 'none'; // Retirer le contour
        }}
      >
        ACCOUNT
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/login"
        className="nav-link fs-5 text-dark"
        style={{
          transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#007bff';
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
          e.target.style.border = '2px solid black'; 
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
          e.target.style.border = 'none'; 
        }}
      >
        LOGOUT
      </Link>
    </li>
  </ul>
</div>

      </div>
    </nav>
  );
}
export function OptionBody() {
  const navigate = useNavigate();
   
      const OrderClick = (e) => {
        e.preventDefault();
        navigate('/craft');
      }
      const SurpriseClick = (e) => {
        e.preventDefault();
        navigate('/surprise');
      }
  return(
    <div  style={{
      backgroundImage: 'url("/pizza6.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '88vh', 
      justifyContent: 'center',
      alignItems: 'center',
  }}>
      <h1 className="text-center" style={{color : 'white'}}>QUIK OPTIONS</h1>
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="row w-100 justify-content-center">
      <div className="col-12 col-md-3 m-3">
      <form className="p-4 bg-white rounded shadow w-100" >
        <label className="pb-4 fs-4" >Please choose your pizza from the menu below. Select your preferred size, crust type, and toppings.
           If you have any special requests or dietary preferences, feel free to let us know! Enjoy your meal!</label>
        <input  type="submit" className="p-4 bg-white rounded shadow w-100" value="NEW ORDER" onClick={OrderClick} />
      </form>
      </div>
      <div className="col-12 col-md-3 m-3">
      <form className="p-4 bg-white rounded shadow w-100" >
        <label  className="pb-4 fs-4">Would you like to reorder your favorite pizza? Simply select 'Reorder'
           and we’ll prepare the same delicious pizza you loved last time. You can also customize it
            if you want to make any changes. Enjoy your meal!</label>
        <input className="p-4 bg-white rounded shadow w-100   "  type="submit" value="RE-ORDER MY FAVE" />
      </form>
      </div>
      <div className="col-12 col-md-3 m-3">
      <form className="p-4 bg-white rounded shadow w-100">
        <label  className="pb-5 fs-4">Feeling adventurous? Choose 'Surprise Me' and let us pick a delicious pizza 
          for you! We’ll create something special based on your preferences. Trust us, you’re in for a treat!</label>
        <input className="p-4 bg-white rounded shadow w-100 "  type="submit" value="SURPRISE ME " onClick={SurpriseClick} />
      </form>
      </div>
      </div>
      </div>
      </div>
  )
}
export function Footer(){
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    overflow: "hidden",
    whiteSpace: "nowrap",
    padding: "10px 0",
    fontSize: "1.2em",
  };

  const scrollingTextStyle = {
    display: "inline-block",
    animation: "scroll 10s linear infinite",
  };

  const keyframesStyle = `
    @keyframes scroll {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div>
      <style>{keyframesStyle}</style>
      <footer style={footerStyle}>
        <div style={scrollingTextStyle}>
          <span style={{ margin: "0 50px" }}>🍕 Delicious pizzas 🍕</span>
          <span style={{ margin: "0 50px" }}>✨ Very good ✨</span>
          <span style={{ margin: "0 50px" }}>🔥 Taste them now🔥</span>
        </div>
      </footer>
    </div>
  );
};

