import { Link } from "react-router-dom";
import "./navbar.module.scss";  
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-laravel">
      <div className="container">
        <Link className="navbar-brand" to="/">ClLinkk</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Side Of Navbar  */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <span className="badge badge-pill badge-primary">1</span>
              <Link className="nav-link">notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/audio">Audo Consultation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/video">Video Consultation </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
