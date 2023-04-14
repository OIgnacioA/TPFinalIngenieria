import { useState } from "react";
import '../estilo.css';

export default function WeatherForm({ CambioCiudad }) {
  const [city, setCity] = useState("");

  function onChange(e) {
    const value = e.target.value;

    if (value !== "") {
      setCity(value); 
    }
  }

  function handle1(e){
    e.preventDefault();
    CambioCiudad(city);

  }

  return (
    <form onSubmit={handle1} className="Formulario">
      <h2>Buscar Lugar</h2>
      <input type="text" onChange={onChange} className="inputs" />
     
      <button type="submit">Buscar</button>
    </form>
  );
}
