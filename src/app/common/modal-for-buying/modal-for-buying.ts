import { Component, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Container } from "../container/container";
@Component({
  selector: 'app-modal-for-buying',
  imports: [ReactiveFormsModule, Container],
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


