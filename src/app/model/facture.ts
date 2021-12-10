import {Client} from './client';
import {DetailFacture} from './detailFacture';
export class Facture {
  idFacture: number;
  montantRemise: number;
  montanttFacture: number;
  date: Date;
  active: boolean;
  client: Client;
  detailFactures: DetailFacture[];
}
