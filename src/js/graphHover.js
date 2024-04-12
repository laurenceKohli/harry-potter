import filmTime from "../../data/Screen_Time_dos.csv";
import filmCaracters from "../../data/HPCharactersData.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { axisRight } from "d3-axis";

let peopleNow = "";

export function graphOver(people) {
    peopleNow = people;
    const averageFilms = averagePerPerson();
    creeBarCharVer(averageFilms);
 
    const CardScreen = document.querySelector(".totalScreen"); // TODO Changer l'id en focntion de l'élément
    CardScreen.addEventListener("mouseover", (e) => showCard(e));
    CardScreen.addEventListener("mouseout", hideCard);
 
    // Création de la carte à afficher au survol
    createHoverCard();
}
 
function createHoverCard() {
    const card = document.createElement("div");
    card.classList.add("hp-quiz-card", "hide"); // hide est une classe pour cacher la carte initialement
    card.innerHTML = `
        <div class="card">
            <div class="sidebar">
                <a href="#" class="menu-item">HOME</a>
                <a href="#" class="menu-item">POSTS</a>
                <a href="#" class="menu-item active">DESCRIPTION</a>
            </div>
            <div class="content">
                <h1>[Name Surname]</h1>
                <p>[Bloodline]</p>
                <p>[Gender]</p>
                <p>[Description]</p>
                <div class="gryffindor">GRYFFINDOR</div>
            </div>
        </div>
    `;
    document.body.appendChild(card);
}

function showCard(e) {
    const card = document.querySelector(".hp-quiz-card");
    const hover = document.querySelector(".hp-quiz-card h1");
    const currentName = e.target.classList.value;
    

    if (!(hover.textContent = ((currentName) == ""))) {
        const dataCaracter = filmCaracters.find((e) => e.Name == currentName)
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
        }
    }
}
 
function hideCard() {
    const card = document.querySelector(".hp-quiz-card");
    if (card) {
        card.classList.add("hide");
    }
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
            .attr("fill", (d, i) => (i%2 == 0) ? "green" : "steelblue"));
 

            const axis = axisRight(yScale)
            .tickFormat(x => `${tempsEnMinutes(x)}`);
    
        const axisGroup = monSvg.append('g')
            .attr('transform', `translate(42, 0)`) // Décalage vers la droite
            .call(axis);
    
        // Déplacer les étiquettes vers la droite
        axisGroup.selectAll('text')
            .attr('x', -40) // Ajuster la position horizontale
    
}