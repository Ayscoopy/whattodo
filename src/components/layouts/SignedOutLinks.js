import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signup" className="nav-link" style={{ color: 'rgba(25, 21, 25, 1)'}} >Signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/signin" className="nav-link" style={{ color: 'rgba(25, 21, 25, 1)'}} >Login</NavLink>
                </li>
            </ul>
                 
    )
}

export default SignedOutLinks;