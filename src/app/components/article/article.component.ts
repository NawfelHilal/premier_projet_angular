import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/model/Card';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  cardData: Card;
  buttonAdd = "ADD";

  constructor(private productService: ProductService, private router: ActivatedRoute){
    this.cardData={id: 0,title: "",subtitle: "", image: "" };
  }
  
  ngOnInit(){
    this.router.params.subscribe(params => {
      this.productService.findOnById(params["id"])
      .subscribe((product: Product) => {
        this.cardData.id = product.id;
        this.cardData.title = product.name;
        this.cardData.subtitle = product.price + '$';
        this.cardData.image = product.picture;
      })
    })
  }
}
