interface WeaterData {
    success: boolean
    name: string
    main: {
        temp: number
    }
}

function getWeatherData(): Promise<WeaterData[]> {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Ilsede&appid=f4fb903a796a6c1db7dcabe7f7c39d59', {
        method: 'GET',
        headers: {

        },
        
    })

        .then(res => res.json())
        .then(res => {
            return res as WeaterData[];
        });
}

getWeatherData()