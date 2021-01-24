import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

function Cart() {
    return (
        <div className="cart-products-container">
            <h2 className="product-h2">Resumen de compra</h2>
            <div className="product-container">
                <h3 className="product-h3">Curso</h3>
                <p className="product-p">Precio</p>
            </div>
            <div className="product-container">
                <h3 className="product-h3">Curso</h3>
                <p className="product-p">Precio</p>
            </div>
            <div className="product-container">
                <h3 className="product-h3">Curso</h3>
                <p className="product-p">Precio</p>
            </div>
        </div>
    );
}

export default Cart;
