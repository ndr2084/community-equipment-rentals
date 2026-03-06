import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:3000/product-for-sale';

  constructor(private http: HttpClient) { };

  getAllProduct(): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(this.url);
  }
}
