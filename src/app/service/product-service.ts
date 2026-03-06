import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // dependency injection
  private readonly http = inject(HttpClient);

  //TODO: assign the bulk of the url in the config file in the future (you will surely remember what this means)
  private apiUrl = 'http://localhost:3000/product-for-sale';

  getAllProduct(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.apiUrl);
  }
}
