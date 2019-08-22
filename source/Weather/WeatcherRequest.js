import {WEATHER_API_KEY, WEATHER_SERVER_URL} from './WeatherConstants'


export const weatherOf = (location, state = '') => {
    const parameters = encodeURIComponent(`${location},${state}`)
    const apiKey = encodeURIComponent(WEATHER_API_KEY)
    fetch(`${WEATHER_SERVER_URL}?q=${parameters}&APPID=${apiKey}`)
    .then(response =>  response.json())
    .then(response => {
        console.log("response = " + response)
    })
}