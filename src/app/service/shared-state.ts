import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedState {

  sharedState = signal<string | null>(null)

  stateInstance = (currentInstance: string) =>{
    this.sharedState.update((previousInstance) =>{
      if(previousInstance === currentInstance){
        console.log('tele');
        return null;
      }
      console.log('phone');
      return currentInstance;
    });
  }
}
