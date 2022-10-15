import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export default function Ciudad() {
    const [city, setCity] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apiKey}`)
        .then(r => r.json())
        .then((recurso) => {
            if(recurso.main !== undefined){
            const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon
            };
            setCity(ciudad);
            } else {
            alert("Ciudad no encontrada");
            }
        });
    })

    return <div>
        <h3>{city.name}</h3>
        <p>temperature: {city.min} - {city.max}</p>
        <p>wind: {city.wind}</p>
        <p>weather: {city.weather}</p>
    </div>
}