import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    return (
        <>
            <div className="navbar-space"></div>
            <nav className="navbar navbar-expand navbar-dark bg-secondary px-2 fixed-top">
                <a className="navbar-brand" href="https://www.github.com/EhsanAryan" target="_blank" rel="noreferrer">Redux & Formik</a>
                <ul className="navbar-nav ms-3">
                    <li><a className="nav-link"><Link to="/shop" className="no-link">Shop</Link></a></li>
                    <li><a className="nav-link"><Link to="/users" className="no-link">Users</Link></a></li>
                    <li><a className="nav-link"><Link to="/form" className="no-link">Form</Link></a></li>
                    <li><a className="nav-link"><Link to="/login" className="no-link">Login</Link></a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;