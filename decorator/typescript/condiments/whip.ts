import { Beverage } from "../beverages/beverage";
import { CondimentDecorator } from "../decorator/condiment-decorator";

export class Whip extends CondimentDecorator {
  
  constructor(public beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription() {
    return this.beverage.description + ", Whip";
  }

  public cost(): number {
    return this.beverage.cost() + .10;
}
}
