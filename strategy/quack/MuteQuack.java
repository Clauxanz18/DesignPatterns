package strategy.quack;

public class MuteQuack implements QuackBehavior {
    public void quack() {
        System.out.print("[silence]");
    }
}
