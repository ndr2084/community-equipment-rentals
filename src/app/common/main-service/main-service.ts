import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { ToggleService } from '../../service/toggle';
import { ProductInterface } from '../../interface/product-interface';
import { PhotoGalleryGrid } from "../photo-gallery-grid/photo-gallery-grid";
import { Card } from "../card/card";
import { PhotoForCard } from "../photo-for-card/photo-for-card";
import { InfoForCard } from "../info-for-card/info-for-card";
import { ModalForBuying } from "../modal-for-buying/modal-for-buying";
import { FormForSelling } from "../form-for-selling/form-for-selling";
import { Hero } from "../hero/hero";
import { ModalForRentalProgram } from "../modal-for-rental-program/modal-for-rental-program";
import { SharedState } from '../../service/shared-state';

@Component({
  selector: 'app-main-service',
  imports: [PhotoGalleryGrid, Card, PhotoForCard, InfoForCard, ModalForBuying, FormForSelling, Hero, ModalForRentalProgram],
  templateUrl: './main-service.html',
  styleUrl: './main-service.css',
})
export class MainService implements OnInit {


  private readonly productService = inject(ProductService);
  sharedState = inject(SharedState);
  toggleService = inject(ToggleService);
  readonly serviceButtonArray: Array<string> = ["Buy", "Sell", "Rentals", "Request"];
  readonly product = signal<ProductInterface[]>([]);
  serviceSignal = signal<string | null>(null);
  interServiceSignal = signal<string | null>(null);
  currentString = this.sharedState;

  ngOnInit(): void {
    this.productService.getAllProduct()
      .subscribe({
        next: (data) => {
          this.product.set(data);
        }
      });
  }

  mySignal = signal(0);

  constructor() {
    setInterval(() => {
      console.log('mySignal:', this.currentString.sharedState());
    }, 3000); // every 3 seconds
  }// every 3 seconds


  toggle(currentString: string, signalArgument: WritableSignal<string | null>): any {
    console.log("numb nuts! it's: " + currentString);
    this.toggleService.toggle(currentString, signalArgument);
  }

}
