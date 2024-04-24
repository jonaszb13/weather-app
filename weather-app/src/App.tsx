import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Ilsede&appid=f4fb903a796a6c1db7dcabe7f7c39d59&units=metric';

interface WeaterData {
  name: string;
  main: {
    temp: number;
  }
}

export default function Infot() {
  const [infos, setInfos] = useState<WeaterData>([]);

  useEffect(() => {
    const fetchInfos = async () => {
      const response = await fetch(`${BASE_URL}`);
      const infos = (await response.json()) as WeaterData;
      setInfos(infos);
    };

    fetchInfos();
  }, []);


  return (
    <div>
      <h1>Weather App</h1>
      <ul>
        <p>{infos.name}</p>
        <p>{infos.main.temp} °C</p>
      </ul>
    </div>
  );
}