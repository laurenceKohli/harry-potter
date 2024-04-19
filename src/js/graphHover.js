import filmTime from "../../data/Screen_Time_dos.csv";
import filmCaracters from "../../data/HPCharactersData.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisRight } from "d3-axis";
import { titleFilm } from "./film.js";

let peopleNow = "";
let houseNow =  "";

export function graphOver(people, house) {
    peopleNow = people;
    houseNow = house;
    const averageFilms = averagePerPerson();
    creeBarCharVer(averageFilms);
 
    const CardScreen = document.querySelector(".totalScreen"); // TODO Changer l'id en focntion de l'élément
    CardScreen.addEventListener("mouseover", (e) => showCard(e));
    CardScreen.addEventListener("mouseout", hideCard);

}
 


function showCard(e) {
    const card = document.querySelector(".hp-quiz-card");
    const hover = document.querySelector(".hp-quiz-card h1");
    const currentName = e.target.classList.value;
    

    if (!(hover.textContent = ((currentName) == ""))) {
        const dataCaracter = filmCaracters.find((e) => e.Name == currentName)
        const currrentHouse =  dataCaracter.House;
        if (card) {
            card.classList.remove("hide");
            card.style.position = "fixed";
            card.style.left = "50%";
            card.style.top = "50%";
            card.style.transform = "translate(-50%, -50%)";
            card.style.zIndex = "1000"; // Assurez-vous que la carte est au-dessus des autres éléments
            hover.textContent = (e.target.classList.value == "")? "NaN" : e.target.classList.value;
            document.querySelector('.content p:nth-child(2)').textContent = dataCaracter.Blood;
            document.querySelector('.content p:nth-child(3)').textContent = dataCaracter.Gender;
            document.querySelector('.content p:nth-child(4)').textContent = dataCaracter.Descr;
            document.querySelector('.house').textContent= houseNow;
        }
    }
}
 
function hideCard() {
    const card = document.querySelector(".hp-quiz-card");
    if (card) {
        card.classList.add("hide");
    }
}


 
function timesOfFilm(filmTitle) {
    let filmRows = filmTime.filter((e) => e.Movie === filmTitle);
    let timeRows = [];
    peopleNow.forEach(personne => {
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

function averagePerPerson(){
    let tempsTotal = [];
    for (let index = 1; index < 3; index++) {
        const film = titleFilm(index);
        const times = timesOfFilm(film[0]);
        times.forEach(personne => {
            const alreadyIn = tempsTotal.filter((e) => e.Character.match(personne.Character))
            if (alreadyIn.length > 0) {
                alreadyIn[0].ScreenTime += tempsEnMilliseconds(personne.ScreenTime);
            } else {
                const send = {
                    "Character": personne.Character, 
                    "ScreenTime": tempsEnMilliseconds(personne.ScreenTime)
                }
                tempsTotal.push(send)
            }
        })
    }
    return tempsTotal.sort((a, b) => (b.ScreenTime) - (a.ScreenTime));
}
 
function tempsEnMilliseconds(temps) {
    const parties = temps.split(':');
    const minutes = parties[0] == "" ? 0 : parseInt(parties[0], 10);
    const secondes = parties[1] == "" ? 0 : parseInt(parties[1], 10);
    const millisecondes = parties[2] ? parseInt(parties[2], 10) : 0;
    return (minutes * 60 * 1000) + (secondes * 1000) + millisecondes;
}

function tempsEnMinutes(temps){
    // Convertir en secondes
    let secondes = Math.floor((temps / 1000) % 60);
    // Convertir en minutes
    let minutes = Math.floor((temps / (1000 * 60)));

    // Ajouter un zéro devant les chiffres < 10 pour formater correctement
    if (secondes < 10) {
        secondes = "0" + secondes;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Retourner le temps formaté
    return minutes + ":" + secondes;
}
 

function creeBarCharVer(donnees){
    //svg
    const height = 600;
 
    const monSvg = select(".totalScreen")
        .append('svg')
        .attr("width", "100%")
        .attr("height", 650);
 
    const yScale = scaleLinear()
        .domain([0, donnees[0].ScreenTime])
        .range([height, 0]);
 
    const barChart = monSvg
        .selectAll("rect")
        .data(donnees)
        .join(enter => enter
            .append("rect")
            .attr("x", (d, i) => i * 30 + 55)
            .attr("y", d => yScale(d.ScreenTime))
            .attr("width", 30)
            .attr("height", (d, i) => height - yScale(d.ScreenTime))
            .attr("class", d => d.Character)
            .attr("fill", (d, i) => (i%2 == 0) ? "#740001" : "#D37E01"));
 

            const axis = axisRight(yScale)
            .tickFormat(x => `${tempsEnMinutes(x)}`);
    
        const axisGroup = monSvg.append('g')
            .attr('transform', `translate(42, 0)`) // Décalage vers la droite
            .call(axis);
    
        // Déplacer les étiquettes vers la droite
        axisGroup.selectAll('text')
            .attr('x', -40) // Ajuster la position horizontale
    
}