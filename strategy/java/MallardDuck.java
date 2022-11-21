package strategy.java;

import strategy.java.fly.FlyWithWings;
import strategy.java.quack.Quack;

public class MallardDuck extends Duck {
    public MallardDuck() {
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    public void display() {
        
    }
}