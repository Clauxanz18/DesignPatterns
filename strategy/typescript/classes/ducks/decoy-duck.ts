import { Duck } from "../duck";
import { FlyNoWay } from "../flyBehaviors/fly-no-way";
import { Squeak } from "../quackBehaviors/squeak";

export class DecoyDuck extends Duck {

  public constructor() {
    super();

    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Squeak();
  }

  display(): void {
    console.log("Im look like a decoy duck");
  }
}
