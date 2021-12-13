import React, { Component, Fragment } from 'react';
import  { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            loading: false,
            errors: {}
        };
    }

    render () {
        const { errors } = this.state;
        return (
            <Fragment>
                <Helmet><title>Register User - Instaquiz</title></Helmet>
                <section className="signup-container">
                    <div className="form-container">
                        <form id="registerForm">
                            <h3>Create an Account</h3>
                            <div className="input-container">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="first_name" type="text" class="validate"/>
                                    <label for="first_name">First Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate"/>
                                    <label for="last_name">Last Name</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input id="password" type="password" class="validate"/>
                                    <label for="password">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                    <input id="email" type="email" class="validate"/>
                                    <label for="email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <input 
                                            className="signupButton"
                                            type="submit"
                                            value="Register"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Already have an account? <Link to="/login">Login!</Link></p>
                            </div>
                        </form>
                    </div>
                </section>
            </Fragment>
        );
    }
}


export default Register;