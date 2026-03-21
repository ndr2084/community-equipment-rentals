import { Component, output, signal } from '@angular/core';
import { Overlay } from "../overlay/overlay";
import { Container } from "../container/container";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WarningPopup } from '../warning-popup/warning-popup';
import { AppointmentPicker } from "../appointment-picker/appointment-picker";

@Component({
  selector: 'app-modal-for-rental-program',
  imports: [Overlay, Container, WarningPopup, ReactiveFormsModule, AppointmentPicker],
  templateUrl: './modal-for-rental-program.html',
  styleUrl: './modal-for-rental-program.css',
})
export class ModalForRentalProgram {

  formForRentalProgramInitiative = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    referralName: new FormControl(''),
    appointmentPicker: new FormControl(''),
    candidateMessage: new FormControl(''),
    dateSelection: new FormControl(''),
  });

discard = output<void>();
closeButtonClicked = signal(false);

onSubmit() {
throw new Error('Method not implemented.');
}

toggleClose() {
  throw new Error('Method not implemented.');
  }

onClose(){
  this.discard.emit();
}



}
