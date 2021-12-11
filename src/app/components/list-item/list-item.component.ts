import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/model/Card';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() cardData: Card;
  @Input() button: string;
  @Output() likeEvent: EventEmitter<any>;
  @Output() buttonEvent: EventEmitter<number>;
  @Output() listComponentClick: EventEmitter<number>;



  constructor() { 
    this.cardData = {id: 0,title: "",subtitle: "", image: "" };
    this.likeEvent = new EventEmitter();
    this.listComponentClick = new EventEmitter();
    this.buttonEvent = new EventEmitter();
    this.button="";
  }

  ngOnInit(): void {
  }

  likeButtonClicked(id: number, event: Event){
    event.stopPropagation();
    this.likeEvent.emit(id);
  }

  buttonClicked(id: number, event: Event){
    event.stopPropagation();
    this.buttonEvent.emit(id);
  }

  onListComponentClick(id: number){
    this.listComponentClick.emit(id);
  }

}
