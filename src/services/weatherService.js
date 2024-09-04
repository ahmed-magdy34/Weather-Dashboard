import axios from "axios";

const API_KEY = "7311bd30dec942da950134808241808";
const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";

export const fetchWeather = (city) => {
  const preferences = JSON.parse(localStorage.getItem("preferences")) || {};
  const unit = preferences.unit === "Fahrenheit" ? "F" : "C";
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
  );
};
