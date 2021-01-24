import { Button } from "bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import "./UserProfile.css";

function UserProfile() {
    return (
        <div className="user-profile">
            <div className="profile-img">
                <img src="../assets/profile.jpeg"></img>
            </div>
            <div>
                <form className="profile-form">
                    <div className="profile-form-field">
                        <label className="form-label">Nombre</label>
                        <input
                            className="profile-input"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            required
                        ></input>
                    </div>
                    <div className="profile-form-field">
                        <label className="form-label">Apellido</label>
                        <input
                            className="profile-input"
                            type="text"
                            name="apellido"
                            id="apellido"
                            placeholder="Apellido"
                            required
                        ></input>
                    </div>
                    <div className="profile-form-field">
                        <label cclassName="form-label">Tecnologias</label>
                        <textarea
                            className="profile-input"
                            type="text"
                            name="Tecnologias"
                            id="tecnologias"
                            placeholder="Escribe aquí tu extracto..."
                            required
                        ></textarea>
                    </div>
                    <div className="profile-form-field">
                        <label className="form-label">
                            Experiencia Academica
                        </label>
                        <textarea
                            className="profile-input"
                            type="text"
                            name="experienciaAcademica"
                            id="experienciaAcademica"
                            placeholder="Escribe aquí tu extracto..."
                            required
                        ></textarea>
                    </div>
                    <div className="profile-form-field">
                        <label className="form-label">
                            Experiencia Laboral
                        </label>
                        <textarea
                            className="profile-input"
                            type="text"
                            name="experienciaLaboral"
                            id="experienciaLaboral"
                            placeholder="Experiencia Laboral"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="profile-form-button">
                        Guardar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserProfile;
