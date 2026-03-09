import { Component, signal } from '@angular/core';
import { BuyingFormInterface } from '../../interface/buying-form-interface';

@Component({
  selector: 'app-modal-for-buying',
  imports: [],
  templateUrl: './modal-for-buying.html',
  styleUrl: './modal-for-buying.css',
})
export class ModalForBuying {

  buyingFormModel = signal<BuyingFormInterface>({
    name: '',
    subject: '',
    isInSameCity: false,
    messageBody: '',
  })
}

