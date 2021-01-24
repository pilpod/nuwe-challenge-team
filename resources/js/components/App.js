import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="container">
            <Footer />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
