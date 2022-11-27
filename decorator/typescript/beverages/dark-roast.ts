import { Beverage } from "./beverage";

export class DarkRoast extends Beverage {

    constructor(){
        super();
        this.description = 'Dark Roast';
    }

    public cost() {
       return .99;
    }

}