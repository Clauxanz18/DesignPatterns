import { Display } from "../interfaces/display";
import { Observer } from "../interfaces/observer";
import { WeatherData } from "../subject/weather-data";

export class Statistics implements Display, Observer {
    private temp: number;
    private humidity: number;
    private pressure: number;

    constructor(private weatherData : WeatherData){
        this.weatherData.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number) {
        this.temp = temp;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display() {
        console.log('FROM STATISTICS => Temperature is '+this.temp +', humidity is '+this.humidity+ ' and pressure: '+ this.pressure);
    }
}
