import React from 'react';
import Card from '../Card';
import CardsStyles from "./index.module.css"

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={CardsStyles.cardContainer}>
    {cities ? cities.map((city, id) => <Card 
      max={city.min}
      min={city.max}
      name={city.name}
      id={city.id}
      img={city.img}
      onClose={onClose}
      key={"city-" + id}
    />) : 'No hay ciudades qué mostrar'}
  </div>
};