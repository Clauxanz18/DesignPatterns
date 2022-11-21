import { Duck } from "../duck";
import { FlyWithWings } from "../flyBehaviors/fly-with-wings";
import { Quack } from "../quackBehaviors/quack";

export class MallardDuck extends Duck {
  public constructor() {
    super();

    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  display(): void {
    console.log("Im look like a mallard duck");
  }
}
