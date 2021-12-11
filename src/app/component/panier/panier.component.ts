import {
  Component,
  OnInit
} from '@angular/core';
import {
  Commande
} from '../../classes/commande';
import {
  CommandeService
} from '../../services/commande.service';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  ValueConverter
} from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  nbOflesCommandes: number;
  lesCommandes: Commande[];
  deleteArticle!: FormGroup;

  constructor(private commandeService: CommandeService) {
    this.lesCommandes = this.commandeService.getAllItems();
    this.nbOflesCommandes = this.lesCommandes.length;
  }

  ngOnInit(): void {
    this.deleteArticle = new FormGroup({
      nom: new FormControl('')
    });
    this.checkAllsushi()
  }

  checkAllsushi() {
    const objets = this.lesCommandes.map(value => value.nom) 
    const panier: Map<string, number> = new Map();
    objets.forEach(objet => (panier.set(objet, (panier.get(objet)  || 0) + 1)))
    console.log(panier);
  }
  

  supprimer(nom: string) {
    let storedNames = JSON.parse(localStorage.getItem('Commande :') || '[]');
    for (let x = 0; x < storedNames.length; x++) {
      if (storedNames[x].nom.includes(nom)) {
        storedNames.splice(x, 1);
      }
    }
    storedNames = JSON.stringify(storedNames);
    localStorage.setItem('Commande :', storedNames);
    window.location.reload();
  }

  supprimerAll() {
    localStorage.removeItem('Commande :');
    window.location.reload();
  }
}
