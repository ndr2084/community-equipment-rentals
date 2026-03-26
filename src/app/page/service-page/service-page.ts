import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { ProductInterface } from '../../interface/product-interface';
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
  readonly serviceButtonArray: string[] = ["Buy", "Sell", "Rentals", "Request"];
  readonly product = signal<ProductInterface[]>([]);
  serviceSignal = signal<string | null>(null);
  interServiceSignal = signal<string | null>(null);

  ngOnInit(): void {
    this.productService.getAllProduct()
      .subscribe({
        next: (data) => {
          this.product.set(data);
        }
      });
  }

  toggle = (currentString: string, signalArgument: WritableSignal<string | null>) => {
    signalArgument.update((previousString) => {
      if (previousString === currentString) {
        return null;
      }
      return currentString;
    });
  }
}



