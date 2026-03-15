import { Component, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Overlay } from "../overlay/overlay";
import { Container } from "../container/container";
import { WarningPopup } from '../warning-popup/warning-popup';

@Component({
  selector: 'app-form-for-selling',
  imports: [ReactiveFormsModule, Container, WarningPopup],
  templateUrl: './form-for-selling.html',
  styleUrl: './form-for-selling.css',
})
export class FormForSelling {
  formForSelling = new FormGroup({
    productName: new FormControl(''),
    productPrice: new FormControl(''),
    productLocation: new FormControl(''),
    productInfo: new FormControl(''),
  });

  closeButtonClicked = signal(true);

  /*you gotta do something diff with this man*/
  onSubmit() {
    console.warn(this.formForSelling.value);
  }

  discard = output<void>();

  toggleClose() {
      this.closeButtonClicked.update((closeButtonClicked) => !closeButtonClicked);
  }

  onClose(){
    this.discard.emit();
  }

}
