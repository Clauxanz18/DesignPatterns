import { Beverage } from "./beverage";

export class HouseBlend extends Beverage {

  constructor(){
    super();
    this.description = 'House Blend';
  }
  
  public cost() {
    return .89;
  }
}
