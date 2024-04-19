import filmTime from "../../data/Screen_Time_dos.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { personnesGryffondor } from "./gryffindor";
import { graphOver } from "./graphHover";

let houseNow = "";
let people = "";

function houseChoosen(house){
    switch (house) {
        case "gryffindor":
            houseNow = "Gryffindor";    
            people = personnesGryffondor;
            break;

        default:
            break;
}}

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
    
    const totalScreen = document.createElement("div");
    const titleTotal = document.createElement("h1");
    titleTotal.textContent = "Graph of the 20th more Screentimed characters";
    totalScreen.classList.add("totalScreen");

    totalScreen.append(titleTotal)

    const average = document.createElement("div");
    const averageTitle = document.createElement("h1");
    averageTitle.textContent = "Average screentime per House";
    averageTitle.classList.add("averageScreen");

    const averageInfo = document.createElement("p");
    averageInfo.textContent = "Click to see the others Houses"

    average.append(averageTitle, averageInfo);

    section.append(div, totalScreen, average);

    const times = timesOfFilm(film[0]);
    const times3prems = times.slice(0, 3);
    console.log(times3prems);

    creeBarCharHor(times3prems);

    graphOver(people, houseNow);

    creeBarCharAverage()
    
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
export {titleFilm};

function timesOfFilm(filmTitle) {
    let filmRows = filmTime.filter((e) => e.Movie === filmTitle);
    let timeRows = [];
    people.forEach(personne => {
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
    const parties = temps.split(':');
    const minutes = parties[0] == "" ? 0 : parseInt(parties[0], 10);
    const secondes = parties[1] == "" ? 0 : parseInt(parties[1], 10);
    const millisecondes = parties[2] ? parseInt(parties[2], 10) : 0;
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

function creeBarCharAverage(){
    //svg
    const donnees = [31, 29, 23, 17]

    const monSvg = select(".averageScreen")
        .append('svg')
        .attr("width", "90%")
        .attr("height", 500);

    const yScale = scaleLinear()
        .domain([0, 40])
        .range([20, 500]); 

    const barChart = monSvg
        .selectAll("rect")
        .data(donnees)
        .join(enter => enter
            .append("rect")
            .attr("x", (d, i) => i * 200)
            .attr("y", d => 500 - yScale(d))
            .attr("width", 100)
            .attr("height", (d, i) => yScale(d)))
            .attr("fill", (d, i) => (i%2 == 0) ? "green" : "steelblue");

    // Crée des étiquettes de texte pour les noms des villes
    const labels = monSvg.selectAll("text")
        .data(donnees)
        .enter().append("text")
        .attr("x", (d, i) => i * 200 + 30) 
        .attr("y", (d, i) => 530 - yScale(d))
        .text(d => `${d}%`)
}