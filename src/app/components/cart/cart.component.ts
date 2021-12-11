import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Cart;

  constructor(private cartService: CartService){
    this.cart = {cartItems: [], total: 0};
  }

  ngOnInit(){
    this.cart = this.cartService.get();
    console.log(this.cart);
  }
}

/**
 * @todo Ajouter un bouton valider le panier => redirige sur la page de saisie d'adresse de livraison = >
 * redirige sur une page avec un bouton paiement (il faudra quand meme prendre en compte le cas ou le paiement ne passe pas)
 * @todo si le paiement pase, on enregsitre la commande dans la bdd. Sinon message d'erreur
 */