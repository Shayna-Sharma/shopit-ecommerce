import React from 'react'
import {Link} from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"

const cartCount = 5;

const Navbar = () =>{
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand fw-bold text-uppercase">SHOPPIT</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/" >Home</Link>
                </li>

                <li className="nav-item me-3">
                  <Link className="nav-link" to="/Products">Products</Link>
                </li>

                <li className="nav-item me-3">
                  <Link className="nav-link" to="/">Contact</Link>
                </li>
              </ul>
          </div>

          <Link to="/cart" className="btn btn-dark ms-3 position-relative">
            <FaCartShopping />
           { cartCount > 0 && (<span>{cartCount}</span>)}
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;