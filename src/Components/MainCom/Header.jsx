import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <NavLink className="navbar-brand text-dark" to="./">
          React Projects
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./imagegallery">
                Gallery
              </NavLink>
            </li>           
            <li className="nav-item">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./imagesearch">
                Find Image
              </NavLink>
            </li>           
            <li className="nav-item">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./covidapi">
                Covid Cases
              </NavLink>
            </li>           
            <li className="nav-item">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./weather">
                Weather App
              </NavLink>
            </li>           
            <li className="nav-item">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./todoapp">
                Todos App
              </NavLink>
            </li>           
            <li className="nav-item">
              <NavLink exact activeClassName='menue-active' className="nav-link text-dark" to="./contact">
                Contact Us
              </NavLink>
            </li>           
          </ul>
          
        </div>
     </nav>
    </>
  );
};

export default Header;
