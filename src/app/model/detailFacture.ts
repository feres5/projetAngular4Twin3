import {Produit} from './produit';

export class DetailFacture {
  idDetailFacture: number;
  qte: number;
  prixTotal: number;
  pourcentageRemise: number;
  montantRemise: number;
  produit: Produit;

}
