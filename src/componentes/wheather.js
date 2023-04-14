import '../estilo.css';

export default function MainInfo({ weather }) {
  return (
    <div className="ContenedorImagen">
      <div className="Ciudad">{weather?.location.name}</div>
      <div className="Temperatura">Tepertura Actual: {weather ? weather.current.temp_c : null}°</div>
      <img src={`http:${weather?.current.condition.icon}`} width="128" alt="" />
      <div className="Imagen">
        <iframe
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13087.055596081967!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1679184918603!5m2!1ses-419!2sar`}
          width="600"
          height="500"
          
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <label>Longtud</label>
        <input  value={weather?.location.lon} className="inputs" readOnly />
        <label>Latitud</label>
        <input  value={weather?.location.lat} className="inputs" readOnly />

    </div>
  );
}
