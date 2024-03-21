import filmTime from "../../data/Screen_Time_dos.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { personnesGryffondor } from "./gryffindor";

let houseNow = "";

function houseChoosen(house){
    switch (house) {
        case "gryffindor":
            houseNow = personnesGryffondor;
            break;

        default:
            break;
}}

const section = document.querySelector("#house");

export function displayFilm(num, house = "gryffindor") {
    houseChoosen(house);

    const div = document.createElement("div");
    div.classList.add("film");

    const title = document.createElement("h1");
    title.textContent = "Screentime per characters";

    const film = titleFilm(num);
    const filmTitle = document.createElement("h2");
    filmTitle.textContent = `${film[0]} (${film[2]})`;
    const descr = document.createElement("p");
    descr.textContent = film[1];

    const screenTime = document.createElement("div");
    screenTime.classList.add("graphique");


    console.log(houseNow);

    const times = timesOfFilm(film[0]);
    const times3prems = times.slice(0, 3);
    console.log(times3prems);

    div.append(title, filmTitle, descr, screenTime);
    section.append(div);

    creeBarCharHor(times3prems);
    
    
}

function titleFilm(num) {
    let title = "";
    let descr = "";
    let time = "";
    switch (num) {
        case 1:
            title = "Harry Potter and the Sorcerer's Stone"
            descr = "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
            time = "152:00:00"
            break;
        case 2:
            title = "Harry Potter and the Chamber of Secrets"
            descr = "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."
            time = "161:00:00"
            break;
        default:
            break;
    }
    return [title, descr, time];
}

function timesOfFilm(filmTitle) {
    let filmRows = filmTime.filter((e) => e.Movie === filmTitle);
    let timeRows = [];
    houseNow.forEach(personne => {
        const line = filmRows.filter((e) => e.Character.match(personne.Name));
        if (line.length > 0) {
            if (!isNaN(tempsEnMilliseconds(line[0].ScreenTime))) {
                timeRows.push(line[0])
            }
        }
    });
    console.log(timeRows);

    return timeRows.sort((a, b) => tempsEnMilliseconds(b.ScreenTime) - tempsEnMilliseconds(a.ScreenTime));
}

function tempsEnMilliseconds(temps) {
    var parties = temps.split(':');
    var minutes = parties[0] == "" ? 0 : parseInt(parties[0], 10);
    var secondes = parties[1] == "" ? 0 : parseInt(parties[1], 10);
    var millisecondes = parties[2] ? parseInt(parties[2], 10) : 0;
    return (minutes * 60 * 1000) + (secondes * 1000) + millisecondes;
}

function creeBarCharHor(donnees){
    //svg
    const width = window.innerWidth;

    const monSvg = select(".graphique")
        .append('svg')
        .attr("width", width)
        .attr("height", 100);

    const xScale = scaleLinear()
        .domain([0, tempsEnMilliseconds(donnees[0].ScreenTime)])
        .range([0, width-300]); 

    const barChart = monSvg
        .selectAll("rect")
        .data(donnees)
        .join(enter => enter
            .append("rect")
            .attr("x", 160)
            .attr("y", (d, i) => i * 40)
            .attr("width", (d, i) => xScale(tempsEnMilliseconds(d.ScreenTime)))
            .attr("height", 10));
    // Crée des étiquettes de texte pour les noms des villes
    const labels = monSvg.selectAll("text")
        .data(donnees)
        .enter().append("text")
        .attr("x", 5) 
        .attr("y", (d, i) => i * 40 + 10)
        .text(d => d.Character)

    const labelsCount = monSvg.selectAll(".count")
        .data(donnees)
        .join(enter => enter.append("text")
          .attr("class", "count")
          .attr("x", (d, i) => 200 + xScale(tempsEnMilliseconds(d.ScreenTime))) 
          .attr("y", (d, i) => i * 40 + 10)
          .text(d => d.ScreenTime)
          .attr("text-anchor", "middle")) 
}