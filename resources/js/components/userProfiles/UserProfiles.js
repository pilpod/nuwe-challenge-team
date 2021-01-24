import React from "react";
import ReactDOM from "react-dom";
import "./UserProfiles.css";

function UserProfiles() {
    return (
        <div className="userProfiles-container">
            <h2>Programadores en búsqueda de empleo</h2>
            <div className="userCards-container">
                <div className="userCards">
                    <img src="../assets/moi.png"/>
                    <h3>Moises Mena</h3>
                    <p>Front-End developer, CSS, Ract y JavaScript</p>
                </div>

                <div className="userCards">
                    <img src="../assets/lorena.png"/>
                    <h3>Lorena Criado</h3>
                    <p>Front-End developer, CSS, Ract y JavaScript</p>
                </div>

                <div className="userCards">
                    <img src="../assets/vanessa.png"/>
                    <h3>Vanessa Poppe</h3>
                    <p>Front-End developer, CSS, Ract y JavaScript</p>
                </div>
            </div>
                        
        </div>
    );
};

export default UserProfiles;