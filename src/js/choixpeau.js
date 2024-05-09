import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importer le plugin ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

export function choixpeauMvt(id) {
    const choixpeau = document.querySelector("#choixpeau");
    switch (id) {
        case 2:
        case 4 :
        case 6 :
            choixpeau.style.top = "100px";
            droiteAGauche();
            break;
        case 1 :
            choixpeau.style.top = "-100px";
            choixpeau.style.left = "40%"
            hautABas();
            break;
        default:
            choixpeau.style.top = "800px";
            choixpeau.style.left = "-20px"
            basAHaut();
            break;
    }
}

function droiteAGauche(){
	gsap.to("#choixpeau", {
		ease: "power1.in", // Fonction d'easing pour un mouvement doux
		duration: 2, // Durée de l'animation
        x: 1900,
        y : 400,
	});
}

function hautABas(){
	gsap.to("#choixpeau", {
		ease: "power1.in", // Fonction d'easing pour un mouvement doux
		duration: 4, // Durée de l'animation
        y : 1800,
	});
}

function basAHaut(){
	gsap.to("#choixpeau", {
		ease: "power1.in", // Fonction d'easing pour un mouvement doux
		duration: 2, // Durée de l'animation
        x: 800,
        y : -1500,
	});
}