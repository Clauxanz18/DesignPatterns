package strategy.fly;

public class FlyNoWay implements FlyBehavior {
    public void fly() {
        System.out.print("I cannot fly");
    }
}
