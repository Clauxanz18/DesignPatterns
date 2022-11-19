package strategy;

import strategy.fly.FlyWithWings;
import strategy.quack.Quack;

public class RedheadDuck extends Duck {

    public RedheadDuck() {
        this.flyBehavior = new FlyWithWings();
        this.quackBehavior = new Quack();
    }

    public void display() {
        
    }
}
