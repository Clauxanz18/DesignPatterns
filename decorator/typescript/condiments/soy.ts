import { Beverage } from "../beverages/beverage";
import { CondimentDecorator } from "../decorator/condiment-decorator";

export class Soy extends CondimentDecorator {
  public getDescription() {
    return this.beverage.description() + ", Soy";
  }

  constructor(public beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public cost(): number {
    return this.beverage.cost() + .15;
  }
}
