import { Component, signal, WritableSignal, ChangeDetectionStrategy, output } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Container } from "../container/container";
import { Overlay } from "../overlay/overlay";
import { WarningPopup } from "../warning-popup/warning-popup";
@Component({
  selector: 'app-modal-for-buying',
  imports: [ReactiveFormsModule, Container, Overlay, WarningPopup],
  templateUrl: './modal-for-buying.html',
  styleUrl: './modal-for-buying.css',
})
export class ModalForBuying {
  formForBuying = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    isInSameCity: new FormControl(''),
    subjectOfMessage: new FormControl(''),
    messageBody: new FormControl(''),
  });

  discard = output<void>();
  closeButtonClicked = signal(false);
  //discardButtonClicked = signal(false);

  /*you gotta do something diff with this man*/
  onSubmit() {
    console.warn(this.formForBuying.value);
  }

  toggleClose() {
      this.closeButtonClicked.update((closeButtonClicked) => !closeButtonClicked);
  }

  onClose(){
    this.discard.emit();
  }


}
