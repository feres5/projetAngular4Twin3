import {Rayon} from './rayon';

export class Promotion {
  idPromotion: number;
  libelle: string;
  active: boolean;
  montant: number;
  rayons?: Rayon[];
}
