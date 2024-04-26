import filmTime from "../../data/Screen_Time_dos.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { personnesGryffindor } from "./gryffindor";
import { personnesRavenclaw } from "./ravenclaw";
import { personnesHufflepuff } from "./hufflepuff";
import { personnesSlytherin } from "./slytherin";

let houseNow = "";
let people = "";

function houseChoosen(house) {
  switch (house) {
    case "gryffindor":
      houseNow = "Gryffindor";
      people = personnesGryffindor;
      break;
    case "ravenclaw":
      houseNow = "Ravenclaw";
      people = personnesRavenclaw;
      break;
    case "hufflepuff":
      houseNow = "Hufflepuff";
      people = personnesHufflepuff;
      break;
    case "slytherin":
      houseNow = "Slytherin";
      people = personnesSlytherin;
      break;

    default:
      break;
  }
}

const section = document.querySelector("#house");

export function displayFilm(num, house = "Gryffindor") {
  houseChoosen(house);

  const div = document.createElement("div");
  div.classList.add("film");

  const title = document.createElement("h1");
  title.textContent = `Screentime of the 3 most characters of each film for ${houseNow}`;

  const film = titleFilm(num);
  const filmTitle = document.createElement("h2");
  filmTitle.textContent = `${film[0]} (${film[2]})`;
  const descr = document.createElement("p");
  descr.textContent = film[1];

  const screenTime = document.createElement("div");
  screenTime.classList.add("graphique");

  div.append(title, filmTitle, descr, screenTime);


  section.append(div);

  const times = timesOfFilm(film[0]);
  const times3prems = times.slice(0, 3);
  console.log(times3prems);

  creeBarCharHor(times3prems);
  creeBarCharAverage();
}

function titleFilm(num) {
  let title = "";
  let descr = "";
  let time = "";
  switch (num) {
    case 1:
      title = "Harry Potter and the Sorcerer's Stone";
      descr =
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.";
      time = "152:00:00";
      break;
    case 2:
      title = "Harry Potter and the Chamber of Secrets";
      descr =
        "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed.";
      time = "161:00:00";
      break;
    case 3:
      title = "Harry Potter and the Prisoner of Azkaban";
      descr =
        "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.";
      time = "142:00:00";
      break;
    case 4:
      title = "Harry Potter and the Goblet of Fire";
      descr =
        "Harry Potter finds himself competing in a hazardous tournament between rival schools of magic, but he is distracted by recurring nightmares.";
      time = "157:00:00";
      break;
    case 5:
      title = "Harry Potter and the Order of the Phoenix";
      descr =
        "With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.";
      time = "138:00:00";
      break;
    case 6:
      title = "Harry Potter and the Half-Blood Prince";
      descr =
        'As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as "the property of the Half-Blood Prince" and begins to learn more about Lord Voldemort\'s dark past.';
      time = "153:00:00";
      break;
    case 7:
      title = "Harry Potter and the Deathly Hallows: Part 1";
      descr =
        "As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.";
      time = "146:00:00";
      break;
    case 8:
      title = "Harry Potter and the Deathly Hallows: Part 2";
      descr =
        "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.";
      time = "130:00:00";
      break;
      
    default:
      break;
  }
  return [title, descr, time];
}
export { titleFilm };

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

function tempsEnMilliseconds(temps) {
  const parties = temps.split(":");
  const minutes = parties[0] == "" ? 0 : parseInt(parties[0], 10);
  const secondes = parties[1] == "" ? 0 : parseInt(parties[1], 10);
  const millisecondes = parties[2] ? parseInt(parties[2], 10) : 0;
  return minutes * 60 * 1000 + secondes * 1000 + millisecondes;
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

function creeBarCharAverage() {
  //svg
  const donnees = [31, 29, 23, 17];

  const monSvg = select(".averageScreen")
    .append("svg")
    .attr("width", "90%")
    .attr("height", 500);

  const yScale = scaleLinear().domain([0, 40]).range([20, 500]);

  const barChart = monSvg
    .selectAll("rect")
    .data(donnees)
    .join((enter) =>
      enter
        .append("rect")
        .attr("x", (d, i) => i * 200)
        .attr("y", (d) => 500 - yScale(d))
        .attr("width", 100)
        .attr("height", (d, i) => yScale(d))
    )
    .attr("fill", (d, i) => (i % 2 == 0 ? "green" : "steelblue"));

  // Crée des étiquettes de texte pour les noms des villes
  const labels = monSvg
    .selectAll("text")
    .data(donnees)
    .enter()
    .append("text")
    .attr("x", (d, i) => i * 200 + 30)
    .attr("y", (d, i) => 530 - yScale(d))
    .text((d) => `${d}%`);
}
