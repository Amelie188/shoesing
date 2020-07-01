export class Chaussure {

    id: number;
    nom: string;
    marque: string;
    type: string;
    taille: number;
    dateEntreStock: Date;
    photo: string;
    estMixte: Boolean;
    description: string;
    prix: number;


constructor (id: number = null, nom: string = null, marque:string = null, type: string = null, taille: number = null, dateEntreStock: Date = null, photo: string = null, estMixte: Boolean = null, description: string = null, prix: number = null) {
    this.id = id;
    this.nom = nom,
    this.marque = marque;
    this.type = type;
    this.taille = taille;
    this.dateEntreStock = dateEntreStock;
    this.photo = photo;
    this.estMixte = estMixte;
    this.description = description;
    this.prix = prix;

}

}
  