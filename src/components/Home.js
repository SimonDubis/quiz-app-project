import React, {Fragment} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => (
    <Fragment>
        <Helmet><title>Your Quiz - Home</title></Helmet>
        <div id="home">
            <section>
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-crosshairs-question icon"></span>
                </div>
                <h1>Your Quiz</h1>
                <div className="play-botton-container">
                    <ul>
                        <li><Link className="play-botton" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Singup</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;