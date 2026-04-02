import { Component, inject, model, output, WritableSignal } from '@angular/core';
import { ToggleService } from '../../service/toggle';
import { SharedState } from '../../service/shared-state';

@Component({
  selector: 'app-service-categories',
  imports: [],
  templateUrl: './service-categories.html',
  styleUrl: './service-categories.css',
})
export class ServiceCategories {
  sharedState = inject(SharedState);
  readonly serviceButtonArray: Array<string> = ["Buy", "Sell", "Rentals", "Request"];
  readonly buttonNameClick = output<string | null>();

  emitButtonValue(buttonNameInstance: string) {
    console.log(buttonNameInstance);
    this.sharedState.stateInstance(buttonNameInstance);
  }
}

