const useWeatherAPI = async (latLng) => {
    const start = new Date();
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const resData = await res.json();
    const end = new Date();
    const responseTime = end - start;

    const weatherData = {
        lng: resData.coord.lon,
        lat: resData.coord.lat,
        temperature: resData.main.temp,
        description: resData.weather[0].description,
        wind: resData.wind.speed,
        clouds: resData.clouds.all,
        responseTime
    }

    return weatherData
}
export default useWeatherAPI