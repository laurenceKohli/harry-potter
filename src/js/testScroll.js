import { displayFilm } from "./film";
import { personnesGryffindor } from "./gryffindor";

let displayedFilmNumber = 1; // Suivre le numéro du film actuellement affiché

// Fonction pour gérer le défilement
export function handleScroll(house) {
    // Récupérer la position de défilement verticale de la fenêtre
    const scrollPosition = window.scrollY;

    // Déterminer à quel point afficher le prochain film
    const threshold = 300; // Par exemple, défilement de 300 pixels avant de changer de film

    if (scrollPosition > threshold && displayedFilmNumber < 8) {
        // Incrémenter le numéro du film actuellement affiché
        displayedFilmNumber++;

        // Afficher le prochain film
        displayFilm(displayedFilmNumber, house);

        // Supprimer l'élément précédent
        const previousFilmElement = document.getElementById(`film${displayedFilmNumber - 1}`);
        if (previousFilmElement) {
            previousFilmElement.remove();
        }
    }
}

// Ajouter un écouteur d'événement pour surveiller le défilement de la fenêtre
window.addEventListener('scroll', () => handleScroll("#film"));

// Afficher le premier film initialement
displayFilm(1, personnesGryffindor);
