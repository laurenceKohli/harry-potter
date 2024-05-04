import { displayFilm } from "./film";
import scrollama from "scrollama";
import { select, selectAll } from "d3-selection";

 export function testScroll(people, houseNow) {
//   // Variable pour suivre l'ID du dernier film affiché
//   let lastFilmId = 0;

//   // Instantiate the scrollama
//   const scroller = scrollama();

//   // Setup the instance, pass callback functions
//   scroller
//     .setup({
//       step: ".step",
//     })
//     .onStepEnter((response) => {
//       const stepElement = document.querySelector(`[data-step="${response.index + 1}"]`); // +1 car les index commencent à 0 mais vos data-step à 1
//       const filmId = response.index + 1; // Ajustement pour correspondre à vos data-step qui commencent à 1

//       // Vérifie si l'élément et le filmId sont différents du dernier affiché
//       if (stepElement && filmId !== lastFilmId) {
//         stepElement.classList.add('sticky');
//         displayFilm(filmId, people, houseNow);
//         lastFilmId = filmId; // Mise à jour de l'ID du dernier film affiché
//       }
//     })
//     .onStepExit((response) => {
//       const stepElement = document.querySelector(`[data-step="${response.index + 1}"]`);
//       if (stepElement) {
//         stepElement.classList.remove('sticky');
//       }
//     });
 }

const scrolly = select("#film");
console.log(scrolly);
const figure = scrolly.select("figure");
const article = scrolly.select("article");
const step = document.querySelectorAll(".step");
console.log(step)

// initialize the scrollama
const scroller = scrollama();

		// generic window resize listener event
// function handleResize() {
// 			// 1. update height of step elements
// 			const stepH = Math.floor(window.innerHeight * 0.75);
// 			step.style("height", stepH + "px");

// 			const figureHeight = window.innerHeight / 2;
// 			const figureMarginTop = (window.innerHeight - figureHeight) / 2;

//       figure.style("height", figureHeight + "px")
// 			.style("top", figureMarginTop + "px");

// // tell scrollama to update new element dimensions
// 			scroller.resize();
// 		}


// scrollama event handlers
function handleStepEnter(response) {
			console.log(response);
			// response = { element, direction, index }

			// add color to current step only
			// step.classed("is-active", function (d, i) {
			// 	return i === response.index;
			// });

			// update graphic based on step
      displayFilm(response.index + 1, people, house)
			//figure.select("p").text(response.index + 1);
		}
let people = "";
let house = "";
		export function initFilmsScroll(peopleNow, houseNow) {

      people = peopleNow;
      house = houseNow;
			// 1. force a resize on load to ensure proper dimensions are sent to scrollama
//		handleResize();

			// 2. setup the scroller passing options
			// 		this will also initialize trigger observations
			// 3. bind scrollama event handlers (this can be chained like below)
			scroller
				.setup({
					step: ".step",
					debug: false
				})
				.onStepEnter(handleStepEnter);
		}

		// kick things off
//		init();
