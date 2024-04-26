import { displayFilm } from "./film";
import { personnesGryffindor } from "./gryffindor";

export function handleScrollAndUpdateFilm(personnesGryffindor) {
  let lastDisplayedFilmId = 0;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    let filmId;

    if (scrollPosition < 500) {
      filmId = 1;
    } else if (scrollPosition >= 500 && scrollPosition < 1000) {
      filmId = 2;
    } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
      filmId = 3;
    } else if (scrollPosition >= 1500 && scrollPosition < 2000) {
      filmId = 4;
    } else if (scrollPosition >= 2000 && scrollPosition < 2500) {
      filmId = 5;
    } else if (scrollPosition >= 2500 && scrollPosition < 3000) {
      filmId = 6;
    } else if (scrollPosition >= 3000 && scrollPosition < 3500) {
      filmId = 7;
    } else if (scrollPosition >= 3500) {
      filmId = 8;
    }

    // Affiche le film correspondant

    displayFilm(1, personnesGryffindor);
    lastDisplayedFilmId = filmId;
  });
}
