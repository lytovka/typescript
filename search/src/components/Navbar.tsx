import React from 'react';
import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <nav>
                <ul className="navbar-links">
                    <li className="navbar-link">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="navbar-link">
                        <a href="More">More</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;