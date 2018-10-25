import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return(
            <ul className="navbar-nav ml-auto" >
                <li className="nav-item active">
                    <NavLink to="/dashboard" className="nav-link" >What Todo?</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" style={{ color: 'rgba(25, 21, 25, 1)'}} >Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" style={{ color: 'rgba(25, 21, 25, 1)'}} onClick={props.signOut}>Logout</NavLink>
                </li>
            </ul>
                 
    ) 
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);