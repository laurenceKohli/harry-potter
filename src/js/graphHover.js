import filmTime from "../../data/Screen_Time_dos.csv";
import filmCaracters from "../../data/HPCharactersData.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisRight } from "d3-axis";
import { titleFilm } from "./displayAllInfos";
import { tempsEnMilliseconds, tempsEnMinutes } from "./utils";

const totalScreen = document.querySelector("#totalScreen");
let peopleNow = "";
let houseNow = "";

export function displayHover(people, house) {
    peopleNow = people;
    houseNow = house;

    totalScreen.innerHTML="";
  const titleTotal = document.createElement("h1");
  titleTotal.textContent = "Graph of the 20th more Screentimed characters";

  totalScreen.append(titleTotal);

  graphOver();
}

function graphOver() {
    const averageFilms = averagePerPerson();
    creeBarCharVer(averageFilms);
 
    const CardScreen = document.querySelector("#totalScreen"); // TODO Changer l'id en focntion de l'élément
    CardScreen.addEventListener("mouseover", (e) => showCard(e));
    CardScreen.addEventListener("mouseout", hideCard);
}
 


// function showCard(e) {
//     e.stopPropagation();
//     const card = document.querySelector(".hp-quiz-card");
//     const hover = document.querySelector(".hp-quiz-card h1");
//     console.log(e.target)
//     const currentName = e.target.id;
    

//     if (!(hover.textContent = ((currentName) == ""))) {
//         const dataCaracter = filmCaracters.find((e) => e.Name == currentName)
//         if ( currentName == "totalScreen" ){
//             //je ne veux afficher que ceux qui ont une carte à leur nom (totalScreen n'est pas dans Harry Potter ;-) )
//         }else {
//             card.style.position = "fixed";
//             card.style.left = "50%";
//             card.style.top = "50%";
//             card.style.transform = "translate(-50%, -50%)";
//             card.style.zIndex = "1000";
//             card.querySelector('.hp-quiz-card .sidebar').style.backgroundColor = `var(--${houseNow}-primary-card-color)`;
//             card.querySelector('.hp-quiz-card .menu-item.active ').style.backgroundColor = `var(--${houseNow}-secondary-card-color)`;
//             card.querySelector('.hp-quiz-card .card').style.backgroundColor = `var(--${houseNow}-background-card-color)`;
//             card.querySelector('.hp-quiz-card .house ').style.color = `var(--${houseNow}-secondary-card-color)`;
//             hover.textContent = (currentName == "")? "NaN" : currentName;
//             // document.querySelector('.content p:nth-child(2)').textContent = dataCaracter.Blood;
//             // document.querySelector('.content p:nth-child(3)').textContent = dataCaracter.Gender;
//             // document.querySelector('.content p:nth-child(4)').textContent = dataCaracter.Descr;
//             // document.querySelector('.house').textContent= houseNow;
//             //console.log(houseNow);
//             card.classList.remove("hide");


//         }
//     }
// }

function showCard(e) {
    e.stopPropagation();
    const card = document.querySelector(".hp-quiz-card");
    const hover = document.querySelector(".hp-quiz-card h1");
    const currentName = e.target.id;

    // Correction ici : utiliser l'opérateur de comparaison pour vérifier si currentName est vide
    if (currentName === "") {
        return; // Si currentName est vide, sortir de la fonction
    }

    let dataCaracter ="";
    if (currentName == "Professor Severus Snape") {
        dataCaracter = filmCaracters.find((e) => e.Name == "Severus Snape");
    } else if (currentName == "Professor Filius Flitwick"){
        dataCaracter = filmCaracters.find((e) => e.Name == "Filius Flitwick");
    } else if (currentName == "Professor Gilderoy Lockhart"){
        dataCaracter = filmCaracters.find((e) => e.Name == "Gilderoy Lockhart");
    } else if(currentName == "Professor Pomona Sprout"){
        dataCaracter = filmCaracters.find((e) => e.Name == "Pomona Sprout");
    }
    else {
        dataCaracter = filmCaracters.find((e) => e.Name == currentName);
    }
    // Gestion spécifique pour "totalScreen"
    if (currentName === "totalScreen") {
        // Ne rien faire pour "totalScreen"
        return;
    } else {
        card.style.position = "fixed";
        card.style.left = "50%";
        card.style.top = "50%";
        card.style.transform = "translate(-50%, -50%)";
        card.style.zIndex = "1000";
        card.querySelector('.hp-quiz-card .sidebar').style.backgroundColor = `var(--${houseNow}-primary-card-color)`;
        card.querySelector('.hp-quiz-card .menu-item.active ').style.backgroundColor = `var(--${houseNow}-secondary-card-color)`;
        card.querySelector('.hp-quiz-card .card').style.backgroundColor = `var(--${houseNow}-background-card-color)`;
        card.querySelector('.hp-quiz-card .house ').style.color = `var(--${houseNow}-secondary-card-color)`;
        hover.textContent = currentName;
        document.querySelector('.content p:nth-child(2)').textContent = dataCaracter.Blood;
        document.querySelector('.content p:nth-child(3)').textContent = dataCaracter.Gender;
        document.querySelector('.content p:nth-child(4)').textContent = dataCaracter.Descr;
        document.querySelector('.house').textContent= houseNow;
        card.classList.remove("hide");
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
        let line= ""
        if (personne.Name == "Professor Rubeus Hagrid") {
           line = filmRows.filter((e) => e.Character.match("Rubeus Hagrid"));
        }else{
            line = filmRows.filter((e) => e.Character.match(personne.Name));
        }
        if (line.length > 0) {
            if (!isNaN(tempsEnMilliseconds(line[0].ScreenTime))) {
                timeRows.push(line[0])
            }
        }
    });
 
    return timeRows.sort((a, b) => tempsEnMilliseconds(b.ScreenTime) - tempsEnMilliseconds(a.ScreenTime));
}

function averagePerPerson(){
    let tempsTotal = [];
    for (let index = 1; index < 9; index++) {
        const film = titleFilm(index);
        const times = timesOfFilm(film[0]);
        times.forEach(personne => {
            let alreadyIn = "";
            if (personne.Character == "Professor Rubeus Hagrid") {
                alreadyIn = tempsTotal.filter((e) => e.Character.match("Rubeus Hagrid"));
             }else{
                alreadyIn = tempsTotal.filter((e) => e.Character.match(personne.Character))
            }
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

function creeBarCharVer(donnees){
    //svg
    const height = 600;
 
    const monSvg = select("#totalScreen")
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
            .attr("x", (d, i) => i * 30 + 60)
            .attr("y", d => yScale(d.ScreenTime))
            .attr("width", 30)
            .attr("height", (d, i) => height - yScale(d.ScreenTime))
            .attr("id", d => d.Character)
            .attr("fill", (d, i) => (i%2 == 0) ? `var(--${houseNow}-secondary-card-color)` : `var(--${houseNow}-secondary-color)`));
            // TODO a remplacer par ${houseNow} à la place du nom de la maison
 

            const axis = axisRight(yScale)
            .tickFormat(x => `${tempsEnMinutes(x)}`);
    
        const axisGroup = monSvg.append('g')
            .attr('transform', `translate(48, 0)`) // Décalage vers la droite
            .call(axis);
    
        // Déplacer les étiquettes vers la droite
        axisGroup.selectAll('text')
            .attr('x', -43) // Ajuster la position horizontale
    
}