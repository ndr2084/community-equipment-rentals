import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedState {

  sharedState = signal<string | null>(null)

  stateInstance = (currentInstance: string) =>{
    this.sharedState.update((previousInstance) =>{
      if(previousInstance === currentInstance){
        return null;
      }
      return currentInstance;
    });
  }
}
