import React from "react";
import ReactDOM from "react-dom";
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import UserProfile from "./user-profile/UserProfile";

function App() {
    return (
        <div className="container">
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
