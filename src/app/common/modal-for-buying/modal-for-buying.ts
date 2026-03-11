import { Component, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Container } from "../container/container";
import { Overlay } from "../overlay/overlay";
@Component({
  selector: 'app-modal-for-buying',
  imports: [ReactiveFormsModule, Container, Overlay],
  templateUrl: './modal-for-buying.html',
  styleUrl: './modal-for-buying.css',
})
export class ModalForBuying {
onSubmit() {
  console.warn(this.formForBuying.value);
}

  formForBuying = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    isInSameCity: new FormControl(''),
    subjectOfMessage: new FormControl(''),
    messageBody: new FormControl(''),
  });

}


