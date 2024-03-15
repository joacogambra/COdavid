import React from "react";
import './styles/contvideo.css'


export default function CardCurso() {
  React;
  return (
    <div className="cardcurso">
        <div className="img-cardcurso"><img src="./dp2.jpg" alt="dcard" /></div>      
        <p><span>Espacio estrellas puntuacion ☆ ★ </span></p>
        <h4>Curso para novatos</h4>
        <h6>Incluye 3 horas de contenido</h6>
        <div className="author">
            <img src="./dp2.jpg" alt="autor" />
            <p>by Chris Juarez</p>
        </div>
    </div>
  );
}