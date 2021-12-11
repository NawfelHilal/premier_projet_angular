import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/Cart';
import { Livraison } from '../model/Livraison';
import { Payment } from '../model/Payment';
import { CartService } from './cart.service';
import { LivraisonService } from './livraison.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment: Payment;
  livraison: Livraison;
  cart: Cart;
  url = 'http://localhost:5000/livraison';

  constructor(private http: HttpClient, private cartService:CartService, private livraisonService: LivraisonService) { 
    this.livraison = {name: '', lastname: '', email: '', numeroRue: 0, nomRue: '', codePostale: 0};
    this.cart = {cartItems: [], total: 0};
    this.payment = { livraison :this.livraisonService.getLivraison(),cart: this.cartService.get()};
  }

  addPayment(payment: Payment): Observable<Payment>{
    return this.http.post<Payment>(this.url,payment);
  }

  get(){
    //return this.
  }
}
