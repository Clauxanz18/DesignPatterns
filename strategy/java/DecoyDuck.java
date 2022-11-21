package strategy.java;

import strategy.java.fly.FlyNoWay;
import strategy.java.quack.MuteQuack;

public class DecoyDuck extends Duck {
    public DecoyDuck() {
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }

    public void display() {
        
    }
}
