import React from 'react';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="More">More</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;