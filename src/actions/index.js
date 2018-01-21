const axios = require('axios')

const API_KEY = 'a0ece145ba3040e07579b795a8cd4135'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
  const URL = `${ROOT_URL}&q=${city},us`

  const request = axios.get(URL)

  return {
    type: FETCH_WEATHER,
    request
  }
}
