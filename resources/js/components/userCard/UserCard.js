import React from "react";
import ReactDOM from "react-dom";
import "./UserCard.css";

function UserCard() {
    return (
        <div className="userCard-Container">
            <div className="userCard-Container__top">
                <img src="../assets/lorena.png"/>
                <div className="userCard-Container__data">
                    <span>Lorena Criado</span>
                    <span>lorena@gmail.com</span>
                    <span>Front-End</span>
                    <span>HTML, CSS, JavaScript, React</span>
                </div>
                
                
            </div>  

            <div className="userCard-Container__bottom">
                <div className="userCard-Container__text1">
                    <h3>Experiencia laboral</h3>
                    <p>5</p>
                </div>
                <div className="userCard-Container__text2">
                    <h3>Experiencia académica</h3>
                    <p>Front-End developer, CSS, Ract y JavaScript</p>
                </div>                
            </div>  



        </div>
    );
};

export default UserCard;