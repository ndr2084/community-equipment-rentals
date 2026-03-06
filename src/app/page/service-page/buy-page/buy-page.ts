import { Component, inject } from '@angular/core';
import { ProductService } from '../../../service/product-service';

@Component({
  selector: 'app-buy-page',
  imports: [],
  templateUrl: './buy-page.html',
  styleUrl: './buy-page.css',
})
export class BuyPage {
  productService: ProductService = inject(ProductService);



}
