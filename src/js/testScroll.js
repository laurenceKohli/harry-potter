import { displayFilm } from "./film";
import scrollama from "scrollama";

export function testScroll(people, houseNow) {
  // Variable pour suivre l'ID du dernier film affiché
  let lastFilmId = 0;

  // Instantiate the scrollama
  const scroller = scrollama();

  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
    })
    .onStepEnter((response) => {
      const stepElement = document.querySelector(`[data-step="${response.index + 1}"]`); // +1 car les index commencent à 0 mais vos data-step à 1
      const filmId = response.index + 1; // Ajustement pour correspondre à vos data-step qui commencent à 1

      // Vérifie si l'élément et le filmId sont différents du dernier affiché
      if (stepElement && filmId !== lastFilmId) {
        stepElement.classList.add('sticky');
        displayFilm(filmId, people, houseNow);
        lastFilmId = filmId; // Mise à jour de l'ID du dernier film affiché
      }
    })
    .onStepExit((response) => {
      const stepElement = document.querySelector(`[data-step="${response.index + 1}"]`);
      if (stepElement) {
        stepElement.classList.remove('sticky');
      }
    });
}
