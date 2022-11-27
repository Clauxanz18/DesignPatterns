import { Beverage } from "../beverages/beverage";
import { CondimentDecorator } from "../decorator/condiment-decorator";

export class Mocha extends CondimentDecorator {
  constructor(public beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription() {
    return this.beverage.description + ", Mocha";
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}
