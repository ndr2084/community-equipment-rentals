import { Injectable, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleService {

  toggle = (currentValue: string |  null, toggleSignal: WritableSignal<string | null>) => {
    toggleSignal.update((previousValue: string | null) => {
      if (currentValue === previousValue) {
        return null;
      }
      return currentValue;
    }
    )
  }
}
