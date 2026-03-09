import { signal } from "@angular/core";

export interface BuyingFormInterface {
  name: string;
  subject: string;
  isInSameCity: boolean;
  messageBody: string;
}

const buyingFormModel = signal<BuyingFormInterface>({
  name: '',
  subject: '',
  isInSameCity: false,
  messageBody: '',
})
