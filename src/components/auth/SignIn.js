import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render(){
        const { authError, auth } = this.props;
        if(auth.uid) return <Redirect to="/dashboard" />

        return(
            <div style={{ marginTop: '-8.5em'}}>
            <section className="bg_gradient" style={{ height:"100%", overflow: 'hidden' }} id="home">
            <div className="home_table_cell" style={{ paddingTop: '6.5em'}} >
                <div className="home_table_cell_center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <p className="mb-2 mt-2"><a href="/" className="text-white"><i className="mdi mdi-home h1"></i></a></p>
                                </div>
                                <div className="">
                                   <div className="bg_form_login p-4">
                                         <h3 className="text-center text-white text-capitalize">Log in</h3>
                                         
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="col-lg-12 mt-3">
                                                <label className="text-muted">Email</label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    className="form-control trial-input" 
                                                    placeholder="Email Id" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <label className="text-muted">Password</label>
                                                <input 
                                                    type="password" 
                                                    id="password" 
                                                    className="form-control trial-input" 
                                                    placeholder="Password" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label 
                                                        className="custom-control-label text-muted" 
                                                        htmlFor="customCheck1"
                                                    >
                                                    Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn_custom w-100 mt-3">Sign In</button>
                                            <div style={{ color: 'red', textAlign: 'center'}}>
                                                { authError ? <p><br />{authError}</p> : null }
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                 <div className="text-center mt-4">
                                    <p><small className="text-white mb-2

                                     mr-2">Don't have an account ?</small> <a href="/signup" className="text-white font-weight-bold">Create an account</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);