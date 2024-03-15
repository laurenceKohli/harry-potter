import filmTime from "../../data/Screen_Time_dos.csv";
import { select } from "d3-selection";
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
    filmTitle.textContent = film[0];
    const descr = document.createElement("p");
    descr.textContent = film[1];

    const screenTime = document.createElement("div");


    console.log(houseNow);

    const times = timesOfFilm(film[0]);
    const times3prems = times.slice(0, 3);
    console.log(times3prems);

    //svg
    const monSvg = select("#house")
        .append('svg')
        .attr("width", "100%")
        .attr("height", 100);
    const barChart = monSvg
        .selectAll("rect")
        .data(times3prems)
        .join(enter => enter
            .append("rect")
            .attr("x", 120)
            .attr("y", (d, i) => i * 40)
            .attr("width", (d, i) => tempsEnMilliseconds(d.ScreenTime) / 10000)
            .attr("height", 10));


    for (let index = 0; index < 3; index++) {
        const element = times[index];
        const character = document.createElement("h2");
        character.textContent = tempsEnMilliseconds(element.ScreenTime);
        screenTime.append(character);
    }

    div.append(title, filmTitle, descr, screenTime, monSvg);
    section.append(div);
}

function titleFilm(num) {
    let title = "";
    let descr = "";
    switch (num) {
        case 1:
            title = "Harry Potter and the Sorcerer's Stone"
            descr = "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
            break;
        case 2:
            title = "Harry Potter and the Chamber of Secrets"
            descr = "An ancient prophecy seems to be coming true when a mysterious presence begins stalking the corridors of a school of magic and leaving its victims paralyzed."
            break;
        default:
            break;
    }
    return [title, descr];
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