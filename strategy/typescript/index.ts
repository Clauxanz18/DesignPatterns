import { DecoyDuck } from "./classes/ducks/decoy-duck";
import { MallardDuck } from "./classes/ducks/mallard-duck";
import { FlyWithWings } from "./classes/flyBehaviors/fly-with-wings";
import { MuteQuack } from "./classes/quackBehaviors/mute-quack";

let duck = new DecoyDuck();

duck.display();
duck.performFly();
duck.setFlyBehavior(new FlyWithWings());
duck.performFly();

duck = new MallardDuck();

duck.display();
duck.performQuack();
duck.setQuackBehavior(new MuteQuack());
duck.performQuack();
