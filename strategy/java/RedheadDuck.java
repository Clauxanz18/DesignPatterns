package strategy.java;

import strategy.java.fly.FlyWithWings;
import strategy.java.quack.Quack;

public class RedheadDuck extends Duck {

    public RedheadDuck() {
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    public void display() {
        
    }
}
