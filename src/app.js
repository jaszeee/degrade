"use strict";
import { generateurPalette, isHex } from "./modules/utils";
import { Color } from "./Color";
//generateurPalette("#ffffff");
const form = document.querySelector("form");
//const input = document.querySelector("input[type='text']");
const input = document.querySelector("input");
const panneauDeCouleur = document.querySelector("main");
const headerElement = document.querySelector("header");
//const input = document.querySelector("input");

//on va créer une fonction qui va être le callback
//de notre eventListener car c'est une manière plus propore de coder
//en séparant la fonction, il sera déclanché lorsque le submit est déclanché

const gestionForm = (e) => {
	//l'action par défaut ne devrait pas être exécutée comme elle l'est normalement.
	//
	//ENLEVE LE REFRESH
	e.preventDefault();
	//PREMIERE MANIERE
	//on va chercher le premier élément de form (donc on va dans index.html) qui est input
	//first child de form c'est input
	//const value = e.target.firstElementChild.value;

	//--
	//--
	//DEUXIEME MANIERE
	const valeur = input.value;
	console.log(valeur);
	//condition pour contrôle valeur hexa
	if (isHex(valeur)) {
		//on sait qu'on va utiliser la valeur saisie pour générer la palette de couleurs
		const palette = generateurPalette(valeur);
		//appeler fonction pour affichier les couleurs
		displayColor(palette);
	} else {
		throw new Error("ceci n'est pas une couleur le sang");
	}
};

const displayColor = (palette) => {
	//***********pour reset le main une fois qu'il y a une nouvelle saisie
	panneauDeCouleur.innerHTML = "";
	palette.forEach((couleur) => {
		new Color(couleur).display(panneauDeCouleur);
	});
	headerElement.classList.add("minimized");
};
//submit - déclanché lors qu'un formulaire est soumis
form.addEventListener("submit", gestionForm);
