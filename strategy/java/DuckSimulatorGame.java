package strategy.java;

public class DuckSimulatorGame {
    public static void main(String[] args) {
        Duck[] ducks = {new MallardDuck(), new RedheadDuck(), new RubberDuck(), new DecoyDuck()};

        for(int i=0; i < 3; i++){
            Duck duck = ducks[i];
            duck.performFly();
            duck.performQuack();
        }
    }
}
