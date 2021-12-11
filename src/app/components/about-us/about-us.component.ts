import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/Card';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  persons: Person[] = [
    {id: 1,name: 'Nawfel', age:12},
    {id: 2,name: 'Nawfel1', age: 22},
    {id: 3, name: 'Nawfel2', age: 32}
]

  imageUrl: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";
  data: Card[];
  buttonShare = "SHARE";

  constructor(){
    this.data = [];
  }

  ngOnInit(){
    this.data = this.transformProductsToCardData();
  }

  transformProductsToCardData(){
   return this.persons.map(datum => {
      let cardData = {id: 0,title: "",subtitle: "", image: "" };

      cardData.id = datum.id;
      cardData.title = datum.name;
      cardData.subtitle = datum.age + ' ans';
      cardData.image = this.imageUrl;

      return cardData;
    })
  }
}