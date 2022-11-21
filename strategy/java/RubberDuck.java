package strategy.java;

import strategy.java.fly.FlyNoWay;
import strategy.java.quack.Squeak;

public class RubberDuck extends Duck {
    public RubberDuck() {
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new Squeak();
    }

    public void display() {
        
    }
}
