import React, { Component } from 'react';
import { Label, Button, Form, FormGroup, Input} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
    constructor(props){
        super(props);
    this.state = {
        firstname: '',
        email: '',
        password: ''
    }
}   
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);
       this.props.signUp(this.state)
    }

    render(){
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to="/dashboard" />
        
        return(
            <div style={{ marginTop: '-8.5em'}}>
            <section className="bg_gradient" style={{ height:"100%", overflow: 'hidden' }} id="home">
            <div className="home_table_cell"  style={{ paddingTop: '6.5em'}}>
                <div className="home_table_cell_center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="text-center">
                                    <p className="mb-2 mt-2"><a href="/" className="text-white"><i className="mdi mdi-home h1"></i></a></p>
                                </div>
                                <div className="">
                                    <div className="bg_form_login p-4">
                                        <h3 className="text-center text-white text-capitalize">Sign Up</h3>
                                        
                                        <Form onSubmit={this.handleSubmit}>
                                            <FormGroup>
                                            <div className="col-lg-12 mt-3">
                                                <Label className="text-muted">First Name</Label>
                                                <Input 
                                                    type="text" 
                                                    id="firstname" 
                                                    className="form-control trial-input" 
                                                    placeholder="First Name"
                                                    required="" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <Label className="text-muted">Email</Label>
                                                <Input 
                                                    type="email"
                                                    id="email" 
                                                    className="form-control trial-input" 
                                                    placeholder="Email Id" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <Label className="text-muted">Password</Label>
                                                <Input 
                                                    type="password" 
                                                    id="password" 
                                                    className="form-control trial-input" 
                                                    placeholder="Password" 
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <div className="custom-control custom-checkbox">
                                                    <Input type="checkbox" className="custom-control-input" id="customCheck1" checked />
                                                    <Label className="custom-control-label text-muted" htmlFor="customCheck1"
                                                        >By Clicking On Signup, You Automatically Accept <a 
                                                        href="/" 
                                                        className="text-white">
                                                        Terms And Condition</a>
                                                    </Label>
                                                </div>
                                            </div>
                                            <Button className="btn btn_custom w-100 mt-3">Sign Up</Button>
                                            <div style={{ color: 'red', textAlign: 'center'}}>
                                                { authError ? <p><br />{authError}</p> : null }
                                            </div>
                                            </FormGroup>
                                        </Form>
                                    </div>
                                </div>
                                <div className="text-center mt-2">
                                    <p><small className="text-white mr-2">Already have an account ?</small> <a href="/signin" className="text-white font-weight-bold">Sign in</a></p>
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

const mapDispatchToProps = dispatch => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);