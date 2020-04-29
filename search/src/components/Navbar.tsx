import React from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <nav>
                <ul className="navbar-links">
                    <li className="navbar-link">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar-link">
                        <a href="/about">About</a>
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