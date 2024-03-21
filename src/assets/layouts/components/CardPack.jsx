import React from "react";
import "./styles/cardpack.css";

export default function CardPack() {
    React
  return (
    <div className="pack-container">
      <div className="header">
        <p className="title">Analista</p>
        <div className="price-container">
          <span>$</span>99      
        </div>
      </div>
      <div>
        <ul className="lists">
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>2 horas de contenido</p>
          </li>
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>1000+ trucos</p>
          </li>
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>Seguimiento 1 a 1</p>
          </li>
          <li className="list">
            <span>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 12.75l6 6 9-13.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
            <p>Asistencia a tiempo real</p>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button type="button-buy">Buy Now</button>
      </div>
    </div>
  );
}
