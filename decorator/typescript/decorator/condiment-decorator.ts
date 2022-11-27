import { Beverage } from "../beverages/beverage";

export abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  public abstract getDescription();
}
