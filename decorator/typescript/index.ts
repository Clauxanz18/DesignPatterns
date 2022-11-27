import { DarkRoast } from "./beverages/dark-roast";
import { Mocha } from "./condiments/mocha";
import { SteamedMilk } from "./condiments/steamed-milk";
import { Whip } from "./condiments/whip";
import { Soy } from "./condiments/soy";



let beverage = new DarkRoast();
let beverage2 = new Mocha(beverage);

beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
beverage2 = new Soy(beverage2);
beverage2 = new SteamedMilk(beverage2);


console.log("Description: ",beverage2.getDescription());
console.log("Cost: ",beverage2.cost());

