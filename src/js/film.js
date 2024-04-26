import filmTime from "../../data/Screen_Time_dos.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { tempsEnMilliseconds } from "./utils";
import { titleFilm } from "./displayAllInfos";

let people = "";

const section = document.querySelector("#house");

export function displayFilm(num, peopleNow) {
  people = peopleNow;

  const div = document.createElement("div");
  div.classList.add("film");

  const film = titleFilm(num);
  const filmTitle = document.createElement("h2");
  filmTitle.textContent = `${film[0]} (${film[2]})`;
  const descr = document.createElement("p");
  descr.textContent = film[1];

  const screenTime = document.createElement("div");
  screenTime.classList.add("graphique");

  div.append(filmTitle, descr, screenTime);


  section.append(div);

  const times = timesOfFilm(film[0]);
  const times3prems = times.slice(0, 3);
  console.log(times3prems);

  creeBarCharHor(times3prems);
}

function timesOfFilm(filmTitle) {
  let filmRows = filmTime.filter((e) => e.Movie === filmTitle);
  let timeRows = [];
  console.log(people);
  people.forEach((personne) => {
    const line = filmRows.filter((e) => e.Character.match(personne.Name));
    if (line.length > 0) {
      if (!isNaN(tempsEnMilliseconds(line[0].ScreenTime))) {
        timeRows.push(line[0]);
      }
    }
  });
  console.log(timeRows);

  return timeRows.sort(
    (a, b) =>
      tempsEnMilliseconds(b.ScreenTime) - tempsEnMilliseconds(a.ScreenTime)
  );
}

function creeBarCharHor(donnees) {
  //svg
  const width = window.innerWidth;

  const monSvg = select(".graphique")
    .append("svg")
    .attr("width", width)
    .attr("height", 100);

  if (!donnees || donnees.length === 0) {
    // Ajout d'un texte de remplacement si les données sont manquantes
    monSvg
      .append("text")
      .attr("x", 5)
      .attr("y", (d, i) => i * 40 + 10)
      .attr("class", "missing-data")
      .text("There is no data to this film");
    return; // Arrête l'exécution de la fonction si les données sont manquantes
  }

  const xScale = scaleLinear()
    .domain([0, tempsEnMilliseconds(donnees[0].ScreenTime)])
    .range([0, width - 300]);

  const barChart = monSvg
    .selectAll("rect")
    .data(donnees)
    .join((enter) =>
      enter
        .append("rect")
        .attr("x", 160)
        .attr("y", (d, i) => i * 40)
        .attr("width", (d, i) => xScale(tempsEnMilliseconds(d.ScreenTime)))
        .attr("height", 10)
    );
  // Crée des étiquettes de texte pour les noms des villes
  const labels = monSvg
    .selectAll("text")
    .data(donnees)
    .enter()
    .append("text")
    .attr("x", 5)
    .attr("y", (d, i) => i * 40 + 10)
    .text((d) => d.Character);

  const labelsCount = monSvg
    .selectAll(".count")
    .data(donnees)
    .join((enter) =>
      enter
        .append("text")
        .attr("class", "count")
        .attr("x", (d, i) => 200 + xScale(tempsEnMilliseconds(d.ScreenTime)))
        .attr("y", (d, i) => i * 40 + 10)
        .text((d) => d.ScreenTime)
        .attr("text-anchor", "middle")
    );
}
