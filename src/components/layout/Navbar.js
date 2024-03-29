// alt+shift+f for formatting
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">CRUD APPLICATION</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-au">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page"exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
            </div>
        </nav>
    );
};

export default Navbar;








