import { displayFilm } from "./film";
import scrollama from "scrollama";
import { select } from "d3-selection";

const scrolly = select("#film");
const figure = scrolly.select("figure");
const article = scrolly.select("article");
const step = document.querySelectorAll(".step");
//console.log(step)

// initialize the scrollama
const scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
			// update graphic based on step
      displayFilm(response.index + 1, people, house)
			//figure.select("p").text(response.index + 1);
		}
let people = "";
let house = "";

export function initFilmsScroll(peopleNow, houseNow) {

      people = peopleNow;
      house = houseNow;
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
