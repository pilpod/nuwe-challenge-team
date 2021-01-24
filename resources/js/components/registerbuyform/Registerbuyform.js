import React from "react";
import ReactDOM from "react-dom";
import "./Registerbuyform.css";

function Registerbuyform() {
    return (
        <div className="form-parent-container">
            <form className="form">
                <label className="label">Nombre titular</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Nombre y apellidos"
                />
                <label className="label">Número tarjeta</label>
                <input
                    className="input"
                    type="text"
                    placeholder="Número tarjeta"
                />
                <label className="label">Fecha de caducidad</label>
                <input
                    className="input"
                    type="fecha"
                    placeholder="00/00/0000"
                />
                <label className="label">CVV</label>
                <input className="input" type="text" placeholder="000" />
                <button className="buy-button">Comprar</button>
            </form>
        </div>
    );
}

export default Registerbuyform;
