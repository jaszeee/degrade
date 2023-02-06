//classe pas de s !! et avec une majuscule
import { generateurPalette } from "./modules/utils";
import convert from "color-convert";

//!!!!!!!!!! TOUJOURS EXPORTER CLASSE !!!!!!!!!!
export class Color {
	//!!! PROPRIETES PRIVES AVANT CONSTRUCTEURS
	#hsl;
	#hex;
	#element;

	//!!!!!!!CONSTRUCTEUR
	constructor(hsl) {
		this.#hsl = hsl;
		this.#hex = `#${convert.hsl.hex(this.#hsl)}`;
		//on stock le carré qu'on a généré en bas
		this.#element = this.#generateurElement();
	}
	//!!!!!!!!METHODES DE COULEURS
	#generateurElement() {
		// !!!!!!!!!! CREER ELEMENT <DIV>
		const colorElement = document.createElement("div");
		// !!!!!!!!! AJOUTER CLASSE
		colorElement.classList.add("color");
		// !!!!!!! AJOUTER ATTRIBUT DE DONNEES "data-color"
		colorElement.dataset.color = this.#hex;
		// !!!!!!! CHANGER COULEUR ELEMENT FONDS
		colorElement.style.backgroundColor = this.#hex;

		//CREER UN ELEMENT <P>
		const textElement = document.createElement("p");
		// Lui ajoute comme texte la valeur hexadécimale
		textElement.textContent = this.#hex;
		// Change la couleur du texte selon la luminosité de la couleur de fond
		textElement.style.color = this.#hsl[2] < 60 ? "#ffffff" : "#000000";
		// Ajoute l'élément <p> comme enfant du <div>
		//AJOUTER TEXTE ELEMENT COMME ENFANT DU DIV
		//***************ajoute element à ma div - appendChild
		//***************enlever element - dependChild
		colorElement.appendChild(textElement);

		// Retourne le <div>
		return colorElement;
	}
	//prend l'élément créer et l'insère dans le DOM
	display(panneauDeCouleur) {
		//le .appendChild met à la suite du parentElement
		//le parentElement c'est le panneau de couleur donc à la place de parentElement on peut aussi dire panneaudecouleur
		panneauDeCouleur.appendChild(this.#element);
	}
}
