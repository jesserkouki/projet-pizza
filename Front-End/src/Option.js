import { Link } from "react-router-dom"

export default function OptionHeader(){
    return(
        <nav>
            <h1>PIZZA PETE'S </h1>
            <ul className="nav nav-pills">
  <li className="nav-item">
    <Link to="/option" className="nav-link active" data-bs-toggle="pill">HOME</Link>
  </li>
  <li className="nav-item">
  <Link to="/order" className="nav-link" data-bs-toggle="pill">ORDER</Link>
  </li>
  <li className="nav-item">
  <Link to="/account" className="nav-link" data-bs-toggle="pill">ACCOUNT</Link>
  </li>
  <li className="nav-item">
  <Link to="/logout" className="nav-link" data-bs-toggle="pill">LOGOUT</Link>
  </li>
</ul>
</nav>
    )
}