import React from "react";
import ReactDOM from "react-dom";
import "./UserCard.css";

function UserCard() {
    return (
        <div className="userCard-Container">
            <div className="userCard-Container__top">
                <img src="../assets/lorena.png"/>
                <div className="userCard-Container__data">
                    <h3>Lorena Criado</h3>
                    <h3>lorena@gmail.com</h3>
                    <h3>Front-End</h3>
                    <h3>HTML, CSS, JavaScript, React</h3>
                </div>
                
                
            </div>  

            <div className="userCard-Container__bottom">
                <div className="userCard-Container__text1">
                    <h3>Experiencia laboral</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sit donec ipsum suspendisse leo at. Volutpat adipiscing non quisque ullamcorper arcu at eget rhoncus dolor. At ut non rhoncus et commodo pellentesque. Nec quam at rhoncus sollicitudin sollicitudin cursus tellus. Pulvinar ipsum amet, purus ligula justo, sit. Volutpat in imperdiet scelerisque ornare dictumst. Fermentum elementum risus leo vestibulum enim.</p>
                </div>
                <div className="userCard-Container__text2">
                    <h3>Experiencia académica</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et sit donec ipsum suspendisse leo at. Volutpat adipiscing non quisque ullamcorper arcu at eget rhoncus dolor. At ut non rhoncus et commodo pellentesque. Nec quam at rhoncus sollicitudin sollicitudin cursus tellus. Pulvinar ipsum amet, purus ligula justo, sit. Volutpat in imperdiet scelerisque ornare dictumst.Fermentum elementum risus leo vestibulum enim. </p>

                </div>                
            </div>  
        </div>
    );
};

export default UserCard;