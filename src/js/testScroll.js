import { displayFilm } from "./film";
import scrollama from "scrollama";

export function handleScroll(peopleNow) {
  const scroller = scrollama();

  scroller
   .setup({
      step: ".step",
      offset: 0.5,
    })
   .onStepEnter((response) => {
      const filmIndex = response.index;
      console.log(filmIndex);
      displayFilm(filmIndex, peopleNow);
    })
   .onStepExit((response) => {
    });
}
