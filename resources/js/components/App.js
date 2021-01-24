import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./aboutUs/AboutUs.js";
import UserProfiles from "./userProfiles/UserProfiles.js";
import UserCard from "./userCard/UserCard.js";
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
            <AboutUs />
            <UserProfiles />
            <UserCard />
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
