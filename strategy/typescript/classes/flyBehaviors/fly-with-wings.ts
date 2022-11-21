import { FlyBehavior } from "../../interfaces/FlyBehavior.interface";

export class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log('i fly to the sun!!!');
    
  }
}
