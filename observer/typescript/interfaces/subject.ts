import { Observer } from "./observer";

export interface Subject {
  observers: Observer[];
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver();
}
