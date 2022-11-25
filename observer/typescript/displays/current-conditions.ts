import { Display } from "../interfaces/display";
import { Observer } from "../interfaces/observer";
import { WeatherData } from "../subject/weather-data";

export class CurrentConditions implements Observer, Display {

    private temp: number;
    private humidity: number;

    constructor(private weatherData : WeatherData){
        this.weatherData.registerObserver(this);
    }

    update(temp: number, humidity: number, pressure: number) {
        this.temp = temp;
        this.humidity = humidity;
        this.display();
    }

    display() {
        console.log('FROM CURRENT => Temperature is '+this.temp +', humidity is '+this.humidity);
    }
}