package strategy;

import strategy.fly.FlyNoWay;
import strategy.quack.Squeak;

public class RubberDuck extends Duck {
    public RubberDuck() {
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Squeak();
    }

    public void display() {
        
    }
}
