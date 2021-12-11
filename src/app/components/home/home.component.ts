import { CastExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { CardItem } from 'src/app/model/CardItem';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  data: Card[] = [];
  buttonAdd = "ADD";
  tabPanier: CardItem[] = [];

  constructor(private cartService: CartService, private productService: ProductService, private router: Router){
    this.products = [];
    this.data = [];
  }

  ngOnInit(){
    this.productService.getProducts().subscribe(productsRecieved => {
      this.products = productsRecieved;
      this.data = this.transformProductsToCardData();
    }
    )
  }

  transformProductsToCardData(){
   return this.products.map(datum => {
      let cardData = {id: 0,title: "",subtitle: "", image: "" };

      cardData.id = datum.id;
      cardData.title = datum.name;
      cardData.subtitle = datum.price + '$';
      cardData.image = datum.picture;

      return cardData;
    })
  }

  onLikeClick(id: number){
    console.log(`Le produit ${id} cliqué`);
  }

  onAddClick(id: number){
    this.productService.findOnById(id).subscribe((product: Product) => {
      this.cartService.add(product);
      console.log(this.cartService);
    })
    }
    
    
  

  onListComponentClick(id: number){
    // window.location.href = `/article/${id}`;
    this.router.navigateByUrl(`/article/${id}`);
  }

  addPanier(id: number){

  }
}