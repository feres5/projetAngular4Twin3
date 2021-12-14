import {CategorieClient} from './CategorieClient';
import {Profession} from './Profession';

export class Client {
  idClient: number;
  nom: string;
  prenom: string;
  dateNaissance: Date;
  email: string;
  password: string;
  categorieClient: CategorieClient;
  profession: Profession;
}
