import { FlyBehavior } from "../../interfaces/FlyBehavior.interface";

export class FlyNoWay implements FlyBehavior {
  fly(): void {

    console.log('I cant fly')

  }
}
