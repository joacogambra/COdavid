import React from "react";
import './styles/footer.css'
import Networks from "./Networks";

export default function Footer() {
  React;
  return (
    <div className="footer">
        <div className="lg-networks">
            {/* <img src="Black.png" alt="fake logo" className="ftr-img"/> */}
            <Networks></Networks>
        </div>
        <div className="ftr-text">
            <p>Inicio</p>
            <p>Terminos y condiciones</p>
            <p>Politicas de privacidad</p>
            <p>tsl@gmail.com</p>
            {/* <a href="mailto:">tsl@gmail.com</a> */}
        </div>
    </div>
  );
}