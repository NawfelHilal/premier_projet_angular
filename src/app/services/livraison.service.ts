import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Livraison } from '../model/Livraison';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  private livraison: Livraison;

  constructor(private router: Router) { 
    this.livraison = {name: '', lastname: '', email: '', numeroRue: 0, nomRue: '', codePostale: 0};
  }

  add(livraisonAdd: Livraison): void {
      this.livraison = { name: livraisonAdd.name, lastname: livraisonAdd.lastname, email: livraisonAdd.email, numeroRue: livraisonAdd.numeroRue, nomRue: livraisonAdd.nomRue, codePostale: livraisonAdd.codePostale };
      localStorage.setItem('adresse', JSON.stringify(this.livraison));
      this.router.navigateByUrl('payment');
    }

    getLivraison(){
      let adresse = localStorage.getItem('adresse');
      if(adresse !== null)
        return JSON.parse(adresse);
    }
  }
