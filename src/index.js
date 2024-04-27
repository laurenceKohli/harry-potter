// Pour importer les données vous pouvez soit importer directement les csv (@rollup/plugin-dsv), soit utiliser la méthode csv de d3-fetch

// @rollup/plugin-dsv
// import populationData from "../data/population_total.csv";
import { displayQuestion, answerChoosen } from "./js/questions";
import { displayResult } from "./js/displayAllInfos";

displayResult("gryffindor");

displayQuestion(1);

let index = 2;
document.querySelector("#question").addEventListener("click", (e) => {
  if (index==2) document.querySelector("#quiz").classList.remove("active")
  if (index<7) {
    displayQuestion(index);
    index++;
  } else if(index == 7) {
    console.log(e.target.closest("li").textContent)
    answerChoosen(index-1, e.target.closest("li").textContent )
  }
 
})