import React from "react";
import ReactDOM from "react-dom";
import AboutUs from "./aboutUs/AboutUs.js";
import UserProfiles from "./userProfiles/UserProfiles.js";
import UserCard from "./userCard/UserCard.js";

function App() {
    return (
        <div className="container">
            <AboutUs />
            <UserProfiles />
            <UserCard />
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
