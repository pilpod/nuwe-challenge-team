import { Button } from "bootstrap";
import React from "react";
import ReactDOM from "react-dom";

function Example() {
    return (
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">
                Left
            </button>
        </div>
    );
}

export default Example;

// if (document.getElementById("welcome")) {
//     ReactDOM.render(<Welcome />, document.getElementById("welcome"));
// }
