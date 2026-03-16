import { Component, inject, OnInit, signal } from '@angular/core';
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

@Component({
  selector: 'app-service-page',
  imports: [PhotoForCard, ModalForBuying, FormForSelling, Card, InfoForCard, Hero],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage implements OnInit {
toggleRent() {
throw new Error('Method not implemented.');
}



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


  changeButtonBackgroundOnClick = signal(false);
  buyButtonClicked = signal(false);
  sellButtonClicked = signal(false);
  requestButtonClicked = signal(false);
  messageSellerClicked = signal(false);
  rentalButtonClicked = signal(false);
  /*only show one and only one of the 3 options at any time (buy, sell, request*/

  toggleBuy() {

    if (this.sellButtonClicked()) {
      this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
    }

    if (this.requestButtonClicked()) {
      this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
    }

    if (this.rentalButtonClicked()){
      this.rentalButtonClicked.update((rentalButtonClicked) => !rentalButtonClicked);
    }

    this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
  }

  toggleMessageSellerModal() {
    this.messageSellerClicked.update((messageSellerClicked) => !messageSellerClicked)
  }

  toggleSell() {
    if (this.buyButtonClicked()) {
      this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
    }

    if (this.requestButtonClicked()) {
      this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
    }

    if (this.rentalButtonClicked()){
      this.rentalButtonClicked.update((rentalButtonClicked) => !rentalButtonClicked);
    }

    this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
  }

  toggleSellItemModal(){
    this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked);
  }

  toggleRequest() {
    if (this.sellButtonClicked()) {
      this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
    }

    if (this.buyButtonClicked()) {
      this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
    }

    if (this.rentalButtonClicked()){
      this.rentalButtonClicked.update((rentalButtonClicked) => !rentalButtonClicked);
    }

    this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
  }

  toggleRental(){

    if (this.sellButtonClicked()) {
      this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
    }

    if (this.requestButtonClicked()) {
      this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
    }
    if (this.buyButtonClicked()){
      this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
    }
    this.rentalButtonClicked.update((rentalButtonClicked) => !rentalButtonClicked);
  }







}

