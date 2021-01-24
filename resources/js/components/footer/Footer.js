import React from "react";
import ReactDOM from "react-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>Copyright © 2021 Perseo. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;

if (document.getElementById("footer")) {
    ReactDOM.render(<Footer />, document.getElementById("footer"));
}
