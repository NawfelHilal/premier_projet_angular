import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { Livraison } from 'src/app/model/Livraison';
import { Payment } from 'src/app/model/Payment';
import { CartService } from 'src/app/services/cart.service';
import { LivraisonService } from 'src/app/services/livraison.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment: Payment;
  livraison: Livraison;
  cart: Cart;

  constructor(private cartService:CartService, private livraisonService: LivraisonService, private paymentService: PaymentService) {
    this.livraison = {name: '', lastname: '', email: '', numeroRue: 0, nomRue: '', codePostale: 0};
    this.cart = {cartItems: [], total: 0};
    this.payment = { livraison: this.livraison, cart: this.cart};

  }

  ngOnInit(): void {
  }

  create(){
    let livraison = this.livraisonService.getLivraison();
   this.cart = this.cartService.get();
  }

  onPaymentClick(event: Event){
    //this.livraison = this.livraisonService.getLivraison();
    //this.cart = this.cartService.get();
    this.cartService.get()
    this.payment = { livraison: this.livraisonService.getLivraison(), cart:  this.cartService.get()};
    this.paymentService.addPayment(this.payment).subscribe();
    console.log(this.payment);
    alert("Paiement effectuer et donnée livraison envoyer sur json server");
  }
}
