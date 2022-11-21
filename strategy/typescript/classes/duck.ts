import { FlyBehavior } from "../interfaces/FlyBehavior.interface";
import { QuackBehavior } from "../interfaces/QuackBehavior.interface";

export abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  swim() {
    console.log("Im a duck so i can swim");
  }

  abstract display();

  performQuack() {
    this.quackBehavior.quack();
  }

  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }
}
