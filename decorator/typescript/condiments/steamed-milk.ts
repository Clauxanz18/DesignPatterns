import { Beverage } from "../beverages/beverage";
import { CondimentDecorator } from "../decorator/condiment-decorator";

export class SteamedMilk extends CondimentDecorator {
  constructor(public beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.description + ", Steamed Milk";
  }

  public cost(): number {
    return this.beverage.cost() + .2;
  }
}
