import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";
import Course from "./course/Course";
import Registerbuyform from "./registerbuyform/Registerbuyform";
import Cart from "./cart/Cart";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import UserProfile from "./user-profile/UserProfile";

function App() {
    return (
        <div className="container">
            <Course />
            <Registerbuyform />
            <Cart />
            <Hero />
            <UserProfile />
            <Footer />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
