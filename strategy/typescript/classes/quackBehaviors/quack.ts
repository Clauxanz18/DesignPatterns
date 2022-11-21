import { QuackBehavior } from "../../interfaces/QuackBehavior.interface";

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quackkkk!!!')
  }
}
