package strategy;

import strategy.fly.FlyNoWay;
import strategy.quack.MuteQuack;

public class DecoyDuck extends Duck {
    public DecoyDuck() {
        this.flyBehavior = new FlyNoWay();
        this.quackBehavior = new MuteQuack();
    }

    public void display() {
        
    }
}
