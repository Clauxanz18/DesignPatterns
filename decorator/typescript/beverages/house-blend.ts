import { Beverage } from "./beverage";

export class HouseBlend extends Beverage {

  constructor(){
    super();
    this.description = 'House Blend';
  }
  
  public cost(): number {
    return .89;
  }
}
