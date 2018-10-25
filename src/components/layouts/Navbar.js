import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return(
        <div style={{ paddingBottom: '8em'}}>
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky" style={{ background: 'rgba(248, 247, 248, 1)'}} >
            <div className="container">
                <Link className="navbar-brand logo" to="/">
                    <img src="/theme/images/logo.png" alt="" className="img-fluid logo-light" style={{ width: '6em', height: '1.5em'}} />
                    <img src="/theme/images/logo.png" alt="" className="img-fluid logo-dark" style={{ width: '7em'}} />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                       { links }
                </div>
            </div>
        </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);