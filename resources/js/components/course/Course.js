import React from "react";
import ReactDOM from "react-dom";
import "./Course.css";

function Course() {
    return (
        <div className="courses-parent">
            <h2 className="courses-parent-title">Cursos destacados</h2>
            <section className="courses-section">
                <div className="course-card">
                    <img
                        className="course-img"
                        src="../assets/course.png"
                        alt="course image"
                    />
                    <h3 className="course-h3">Curso básico portfolio</h3>
                    <p className="course-p">
                        Cómo realizar tu propio portfolio
                    </p>
                    <div className="course-info-container">
                        <h2 className="course-h2">30.0€</h2>
                        <button className="course-button">Comprar</button>
                    </div>
                </div>
                <div className="course-card">
                    <img
                        className="course-img"
                        src="../assets/course1.png"
                        alt="course image"
                    />
                    <h3 className="course-h3">Curso trabajo en remoto</h3>
                    <p className="course-p">
                        Aprende a gestionar tu tiempo trabajando online
                    </p>
                    <div className="course-info-container">
                        <h2 className="course-h2">30.0€</h2>
                        <button className="course-button">Comprar</button>
                    </div>
                </div>
                <div className="course-card">
                    <img
                        className="course-img"
                        src="../assets/course2.png"
                        alt="course image"
                    />
                    <h3 className="course-h3">Curso comunicación efectiva</h3>
                    <p className="course-p">
                        Aprende a comunicarte con tu equipo
                    </p>
                    <div className="course-info-container">
                        <h2 className="course-h2">30.0€</h2>
                        <button className="course-button">Comprar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Course;

if (document.getElementById("course")) {
    ReactDOM.render(<Course />, document.getElementById("course"));
}

