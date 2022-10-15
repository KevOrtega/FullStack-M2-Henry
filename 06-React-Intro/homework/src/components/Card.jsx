import React from 'react';
// import WeatherImg from 'WeatherCard.png'

export default function Card({img, max, min, name, onClose}) {
  // acá va tu código
  return <div>
    <h2>{name}</h2>
    <div>min: {min}</div>
    <div>max: {max}</div>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
    <button onClick={onClose}>X</button>
  </div>
};