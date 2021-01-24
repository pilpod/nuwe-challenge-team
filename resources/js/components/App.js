import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

function App() {
    return (
        <div className="container">
            <Button />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
