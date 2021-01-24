import React from "react";
import ReactDOM from "react-dom";
import Hero from "./hero/Hero";

function App() {
    return (
        <div className="container">
            <Hero />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
