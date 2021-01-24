import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";
import Course from "./course/Course";
import Registerbuyform from "./registerbuyform/Registerbuyform";
import Cart from "./cart/Cart";

function App() {
    return (
        <div className="container">
            <Course />
            <Registerbuyform />
            <Cart />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
