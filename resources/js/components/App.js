import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";
import Course from "./course/Course";
// import "../components/course/Course.css";

function App() {
    return (
        <div className="container">
            <Course />
        </div>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
