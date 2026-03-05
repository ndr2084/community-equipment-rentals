import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  url = 'http://localhost:3000/product-for-sale';

  constructor () {}

  async getAllProductForSale(): Promise<Product>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

}
