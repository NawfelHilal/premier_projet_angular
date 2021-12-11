import { Component } from '@angular/core';
import { Livraison } from 'src/app/model/Livraison';
import { LivraisonService } from 'src/app/services/livraison.service';

@Component({
  selector: 'app-livraison',
  templateUrl: './livraison.component.html',
  styleUrls: ['./livraison.component.css']
})
export class LivraisonComponent {

  livraison: Livraison;
  url = 'http://localhost:5000/contact';

  constructor(private livraisonService: LivraisonService) {
    this.livraison = {name: '', lastname: '', email: '', numeroRue: 0, nomRue: '', codePostale: 0};
  }

  onLivraisonSubmit(event: Event){
    event.preventDefault();
    //return this.http.post(this.url, this.contact);
    this.livraisonService.add(this.livraison);
  }

  getLivraison(){
    let adresse = localStorage.getItem('adresse');
    if(adresse !== null)
      return JSON.parse(adresse);
  }

}
