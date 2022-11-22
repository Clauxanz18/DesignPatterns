import { Observer } from "../interfaces/observer";
import { Subject } from "../interfaces/subject";

export class WeatherData implements Subject {
  observers: Observer[] = [];
  temperature: number;
  humidity: number;
  pressure: number;

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    // console.log(observer);
    this.observers = this.observers.filter((o) => o !== observer);
    // console.log(obs);
  }

  notifyObserver() {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementsChanged() {
    this.notifyObserver();
  }

  setMeasurements(temp, humidity, pressure){

    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
