import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalRegistry {

  signalRegistry = new Map<string, WritableSignal<any>>();
  constructor(){
  }

  addSignal(key: any, value: WritableSignal<any>): boolean {
    console.log("reached addSignal, key is : " + key + " Value is: " + value);
    if (this.signalRegistry.has(key)) {
      return false;
    }
    else {
      this.signalRegistry.set(key, value);
      return true;
    }
  }

  getSignal(key: any){
    if (this.signalRegistry.has(key)) {
      return this.signalRegistry.get(key)!();
    }
    return null;
  }
}
