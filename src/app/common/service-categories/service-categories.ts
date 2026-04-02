import { Component, inject, signal } from '@angular/core';
import { ToggleService } from '../../service/toggle';
import { SharedState } from '../../service/shared-state';
import { SignalRegistry } from '../../service/signal-registry';

@Component({
  selector: 'app-service-categories',
  imports: [],
  templateUrl: './service-categories.html',
  styleUrl: './service-categories.css',
})
export class ServiceCategories {

  signalRegistry = inject(SignalRegistry);
  sharedState = inject(ToggleService);
  readonly signalKey = "service-categories";
  readonly serviceButtonClicked = signal<string | null>(null);
  readonly serviceButtonArray: Array<string> = ["Buy", "Sell", "Rentals", "Request"];


  buttonValue(buttonNameInstance: string) {
    console.log(buttonNameInstance);
    this.sharedState.toggle(buttonNameInstance, this.serviceButtonClicked);
    this.signalRegistry.addSignal(this.signalKey, this.serviceButtonClicked);
  }
}

