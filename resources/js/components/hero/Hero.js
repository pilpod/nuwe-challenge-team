import { Button } from "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import './Hero.css'


function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-title">Conéctate a tu futuro</h1>
            <p className="hero-text">Las mejores empresas te están esperando, que te conozcan sólo depende de tí.</p>
            <button className="hero-button">Registrate</button>
        </div>
    );
}

export default Hero;

if (document.getElementById("hero")) {
    ReactDOM.render(<Hero />, document.getElementById("hero"));
}
