package strategy.java.quack;

public class MuteQuack implements QuackBehavior {
    public void quack() {
        System.out.println("[silence] \n");
    }
}
