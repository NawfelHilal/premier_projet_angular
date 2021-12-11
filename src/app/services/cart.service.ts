import { Injectable } from '@angular/core';
import { CardItem } from '../model/CardItem';
import { Cart } from '../model/Cart';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;

  constructor() {
    this.cart = { cartItems: [], total: 0};
    this.setCartFromLocalStorage();
  }

  add(product: Product): void {
    let cartItem: CardItem | undefined =  this.checkIfProductExistsInCart(product);

    if (cartItem === undefined)
    {
      cartItem = { productId: product.id, description: product.name, unitPrice: product.price, quantity: 0 };
      this.cart.cartItems.push(cartItem);
    }
      cartItem.quantity++;

      this.setCartTotal();
      this.setCartInLocalStorage();

      console.log(this.cart);
    
      //for(let i=0; i<this.cart.cartItems.length; i++){
      //  this.cart.total += this.cart.cartItems[i].unitPrice * this.cart.cartItems[i].quantity;
      //}
  }

  checkIfProductExistsInCart(product: Product): undefined | CardItem {
    let cartItem =this.cart.cartItems.find((cartItem: CardItem) => {
      return cartItem.productId === product.id;
   })
  return cartItem;
  }

  setCartTotal(){
    let total = 0;
    this.cart.cartItems.forEach((cartItem: CardItem) => {
      total += cartItem.unitPrice * cartItem.quantity;
    }) 

    this.cart.total = total;
  }

  setCartInLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  setCartFromLocalStorage(): void{
    let data = localStorage.getItem('cart');
    if(data !== null){
      this.cart = JSON.parse(data);
    }
  }

  get(): Cart{
    return this.cart;
  }
}
