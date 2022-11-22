import { CurrentConditions } from "./displays/current-conditions";
import { Forecast } from "./displays/forecast";
import { Statistics } from "./displays/statistics";
import { WeatherData } from "./subject/weather-data";

const weatherData = new WeatherData();

const currentConditions = new CurrentConditions(weatherData);
const statistics = new Statistics(weatherData);
const forecast = new Forecast(weatherData);

weatherData.setMeasurements(10,20,32);

weatherData.removeObserver(currentConditions);

weatherData.setMeasurements(22,13,42);
