import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../model/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.API_URL + environment.endpoints.product);
  }

  findOnById(id: number): Observable<Product> {
    return this.http.get<Product>(environment.API_URL + environment.endpoints.product + `/${id}`);
  }
}
