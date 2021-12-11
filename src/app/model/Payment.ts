import { Cart } from "./Cart";
import { Livraison } from "./Livraison";

export type Payment = {
    livraison: Livraison,
    cart: Cart;
}