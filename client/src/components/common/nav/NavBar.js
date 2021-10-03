import { Link } from "react-router-dom";
import "./navbar.scss";  
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar-laravel">
      <div className="container">
        <div className="navbar-brand">
        <a rel="noreferrer" href="https://www.clinikk.com/" target="_blank"><img src="https://uploads-ssl.webflow.com/5ed48fc5ec5df258eafdd1f8/5f2ee41d0bee909506001833_Clinikk_Logo_White_Horizontal.svg" width="150" data-w-id="0583b993-c9c5-a1bc-c8a1-b3bbc5dd5495" alt="" className="logo-image"/></a>
        </div>
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
              <Link className="nav-link" to="/audio">Audo Consultation</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/video">Video Consultation </Link>
            </li> */}
            <li className="nav-item">
              <span className="badge badge-pill badge-primary">1</span>
              <a className="nav-link">Notifications</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
