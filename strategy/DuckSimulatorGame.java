package strategy;

public class DuckSimulatorGame {
    public static void main(String[] args) {
        Duck duck = new MallardDuck();

        duck.performFly();
        duck.performQuack();
    }
}
