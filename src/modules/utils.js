//on garde notre app.js soit notre module d'entrée
// ON GARDE CE DOCUMENT (DONC LE MODULE D'ENTRÉE)
// POUR DES CHOSES QUI VONT MODIFIER L'ETAT DE NOTRE APP
//importer le module installé (color-convert)
import convert from "color-convert";

//syntaxe propre à la librairie
//let color = convert.hex.hsl("#ffffff");
//console.log(color);

//générer palette de couleur avec une fonction
//on lui passe hex et on veut qu'il retoure un hsl
export const generateurPalette = (hex) => {
	//on indique les deux premières valeurs convertis
	//seront convertis et stocker dans une tableaux [h,s]
	let [h, s] = convert.hex.hsl(hex);
	//tableau qui va stocker les couleurs final (hsl)
	const palette = [];
	console.log([h, s]);
	//on fait une boucle pour le l car il bouge de
	//10 en 10 et on va stocker l avec h et s dans le tableau palette
	for (let l = 0; l <= 100; l += 10) {
		palette.push([h, s, l]);
	}
	console.log(palette);
	return palette;
};
//utiliser une expression rationnelle pour savoir
//si valeur saisie est une valeur hexa

export const isHex = (hex) => {
	return /^#[0-9A-F]{6}$/i.test(hex);
};
