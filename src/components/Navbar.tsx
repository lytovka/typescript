import React from 'react';
import {NavLink} from 'react-router-dom';
import '../index.css';

export const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper px1">
                    <a href="/">React + Typescript</a>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/">Todos</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}