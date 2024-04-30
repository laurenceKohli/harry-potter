import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importer le plugin ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

export function vifOrMvt(id) {
	gsap.to("#vifor", {
		ease: "power1.in", // Fonction d'easing pour un mouvement doux
		//duration: 1, // Durée de l'animation
		scrollTrigger: {
			trigger: "#mainCharacters", // Déclencheur pour l'animation
			start: "top top", // Début de l'animation lorsque le haut de l'élément déclencheur atteint le haut de la fenêtre
			end: "bottom bottom", // Fin de l'animation lorsque l'élément déclencheur atteint le bas de la fenêtre
			scrub: true, // Faites en sorte que l'animation se synchronise avec le défilement
			onUpdate: self => {
				const progress = self.progress;
				let xPosition = progress * 2000; // Calculer la position horizontale en fonction de la progression
				if (progress < 0.25) {
					gsap.set("#vifor", { x: xPosition });
				} else {
					const rotation = (progress * 360) - 90; // Calculer la rotation en fonction de la progression
					if (rotation > 90) {
						gsap.set("#vifor", { x: xPosition }); // Appliquer la rotation à l'élément
					} else {
						gsap.set("#vifor", { rotation: rotation*4, x: xPosition });
					}
				}
			},
		}
	});
}