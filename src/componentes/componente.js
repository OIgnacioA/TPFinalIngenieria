import { useState, useEffect } from "react";
import WeatherForm from "./weatherForm";
import MainInfo from './wheather'
import '../estilo.css';

export default function WeatherApp() {
  const [weather, setWheater] = useState(null);


  useEffect(()=> {
    loadInfo();
  },[]);

  useEffect(() => {
    document.title = `Weather | ${weather?.location?.name ?? ""}`;
  }, [weather]);
  



  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
   

      );

      const json = await request.json();
      setWheater(json);
      console.log(json);
    } catch (error) {}

   
  }

  function CambioCiudad(city) {
    setWheater(null);
    loadInfo(city);
  }


  return (
    <div className="ContenedorPrincipal">
      <WeatherForm CambioCiudad={CambioCiudad} />
      <MainInfo
      weather = {weather}
      />
    </div>
  );

}
