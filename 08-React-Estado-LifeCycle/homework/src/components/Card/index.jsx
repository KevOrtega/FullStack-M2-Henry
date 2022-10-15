import React from 'react';
import CardStyles from "./index.module.css"

export default function Card({id, img, max, min, name, onClose}) {
  // acá va tu código
  return <div className={CardStyles.card}>
    <button onClick={() => onClose(id)}>X</button>
    <h2>{name}</h2>
    <div className={CardStyles.cardData}>
      <div>
        <p>min</p>
        <p>{min}°</p>
      </div>
      <div>
        <p>max</p>
        <p>{max}°</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="Weather" />
    </div>
  </div>
};