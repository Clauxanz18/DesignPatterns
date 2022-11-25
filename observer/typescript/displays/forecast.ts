import { Display } from "../interfaces/display";
import { Observer } from "../interfaces/observer";
import { WeatherData } from "../subject/weather-data";

export class Forecast implements Display, Observer {
  private temp: number;
  private pressure: number;

  constructor(private weatherData: WeatherData) {
    this.weatherData.registerObserver(this);
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temp = temp;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log(
      "FROM FORECAST => Temperature is " +
        this.temp +
        " and pressure: " +
        this.pressure
    );
  }
}
