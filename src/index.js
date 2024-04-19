// Pour importer les données vous pouvez soit importer directement les csv (@rollup/plugin-dsv), soit utiliser la méthode csv de d3-fetch

// @rollup/plugin-dsv
// import populationData from "../data/population_total.csv";

import { houseBasics } from "./js/house";
import { displayFilm } from "./js/film";

houseBasics("ravenclaw");
displayFilm(1,"gryffindor");


//questions
import { questionsUser } from "./js/questions";
 
function displayQuestions() {
  const section = document.getElementById("questions");
  section.classList.remove("hide"); // Affiche la section si elle était cachée
 
  Object.values(questionsUser).forEach((item, index) => {
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `<h3>${item.question}</h3>`;
 
    const answersList = document.createElement("ul");
    Object.entries(item.réponse).forEach(([answer, value]) => {
      const answerItem = document.createElement("li");
      answerItem.textContent = answer;
      answersList.appendChild(answerItem);
    });
 
    questionElement.appendChild(answersList);
    section.appendChild(questionElement);
  });
}
 
// Appel de la fonction pour afficher les questions et réponses
displayQuestions();