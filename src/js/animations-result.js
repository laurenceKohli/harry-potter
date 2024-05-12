import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Importer le plugin ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

export function vifOrMvt() {
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

export function dobbyMvt(){
	const sectionToAppear = document.querySelector("#dobby");

	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5 // Trigger quand 50% de la section est visible
	  };
	  
	// Créez un Intersection Observer pour observer la section "graphe"
	const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
		// La section "graphe" est visible, commencez à observer
		observer.disconnect(); // Arrêtez d'observer une fois détecté
	
		// Délai de 2 minutes après l'intersection
		setTimeout(() => {
			// Animation pour faire apparaître la section
			gsap.to(sectionToAppear, {
			duration: 1,
			y : -786,
			ease: "power2.out" // Ajustez l'ease selon vos préférences
			});
		}, 3000); // 120000 millisecondes = 2 minutes
		}
	});
	}, options);
	
	// Sélectionnez la section "graphe" que vous souhaitez observer
	const graphSection = document.querySelector("#totalScreen");
	
	// Commencez à observer la section "graphe"
	observer.observe(graphSection);
}