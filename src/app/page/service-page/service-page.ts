import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../../interface/product-interface';
import { Container } from "../../common/container/container";
import { PhotoForCard } from "../../common/photo-for-card/photo-for-card";
import { ModalForBuying } from "../../common/modal-for-buying/modal-for-buying";
import { FormForSelling } from "../../common/form-for-selling/form-for-selling";
import { Card } from "../../common/card/card";
import { InfoForCard } from "../../common/info-for-card/info-for-card";
import { Hero } from "../../common/hero/hero";
import { PhotoGalleryGrid } from '../../common/photo-gallery-grid/photo-gallery-grid';
import { ModalForRentalProgram } from "../../common/modal-for-rental-program/modal-for-rental-program";

@Component({
  selector: 'app-service-page',
  imports: [PhotoForCard, ModalForBuying, FormForSelling, Card, InfoForCard, Hero, PhotoGalleryGrid, ModalForRentalProgram],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage implements OnInit {

  private readonly productService = inject(ProductService);
  readonly product = signal<ProductInterface[]>([]);


  ngOnInit(): void {
    this.productService.getAllProduct()
      .subscribe({
        next: (data) => {
          this.product.set(data);
        }
      });
  }

/*Service Button Logic Begins*/
serviceSignal = signal<string | null>(null);

toggleServiceButton = (currentServiceButtonValue: string) => {
  this.serviceSignal.update((previousServiceButtonValue) => {
    if(currentServiceButtonValue === previousServiceButtonValue){
      return null;
    }
    return currentServiceButtonValue;
  });
}
serviceButtonClicked = (currentServiceButtonValue: string) =>{
  return this.serviceSignal() === currentServiceButtonValue;
}
serviceButtonMap = new Map<string, string>([
  ["Buy", "Buy"],
  ["Sell", "Sell"],
  ["Rentals", "Rentals"],
  ["Request", "Request"]
])
/*Service Button Logic Ends*/

/*form and modal logic begins*/
formSignal = signal<string | boolean | null >(false);

toggle = (currentForm: string) => {
  this.formSignal.update((previousForm) => {
    if(previousForm===currentForm){
      return null;
    }
    return currentForm;
  });
}

checkCurrentForm = (currentlyClickedForm: string) => {
  this.formSignal.update((previouslyClickedForm) =>{
    if(previouslyClickedForm === currentlyClickedForm){
      return false;
    }
    return true;

  })
}
/*form and modal logic ends*/
}

