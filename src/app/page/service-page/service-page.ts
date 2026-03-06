import { Component, inject, OnInit, signal} from '@angular/core';
import { ProductService } from '../../service/product-service';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../../interface/product-interface';

@Component({
  selector: 'app-service-page',
  imports: [],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage implements OnInit {



private readonly productService = inject(ProductService);
readonly product = signal<ProductInterface[]>([]);


  ngOnInit(): void {
    this.productService.getAllProduct()
    .subscribe({
next : (data) =>{
      this.product.set(data);
    }
  });
  }

  changeButtonBackgroundOnClick = signal(false);
  buyButtonClicked = signal(false);
  sellButtonClicked = signal(false);
  requestButtonClicked = signal(false);

  /*only show one and only one of the 3 options at any time (buy, sell, request*/

  toggleBuy() {

    if (this.sellButtonClicked()) {
      this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
    }

    if (this.requestButtonClicked()) {
      this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
    }

    this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
  }

  toggleSell() {
    if (this.buyButtonClicked()) {
      this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
    }

    if (this.requestButtonClicked()) {
      this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
    }

    this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
  }

  toggleRequest() {
    if (this.sellButtonClicked()) {
      this.sellButtonClicked.update((sellButtonClicked) => !sellButtonClicked)
    }

    if (this.buyButtonClicked()) {
      this.buyButtonClicked.update((buyButtonClicked) => !buyButtonClicked)
    }

    this.requestButtonClicked.update((requestButtonClicked) => !requestButtonClicked)
  }
}

