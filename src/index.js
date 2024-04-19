// Pour importer les données vous pouvez soit importer directement les csv (@rollup/plugin-dsv), soit utiliser la méthode csv de d3-fetch

// @rollup/plugin-dsv
// import populationData from "../data/population_total.csv";

import { houseBasics } from "./js/house";
import { displayFilm } from "./js/film";
import { questionsUser, displayQuestion } from "./js/questions";

houseBasics("ravenclaw");
displayFilm(1,"gryffindor");

displayQuestion(1);