# Decorator

## Use case - Starbuzz

Starbuzz is a coffee shop with a quick growth over the last couple months. Because of the rapid scaling, they're ordering system is not keeping up with demand. 

Their original design only took into account the coffee orders, but you can also add condiments to any coffee, each with a distinct price. Each possible combination of coffee and condiments needs to be handled by the system, but taking into account that each condiment can appear multiple times or none, the total amount of individual possibilities would be too much to maintain effectively. 

Here we use Decorator pattern to apply each condiment dynamically at runtime, allowing us to compose a beverage with as many or as few condiments as we need without the need to subclass or hard-code each combination beforehand.

## UML Diagram

TODO:  Add UML diagram