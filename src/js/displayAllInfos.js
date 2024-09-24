import { personnesGryffindor, gryffindor } from "./gryffindor";
import { personnesRavenclaw, ravenclaw } from "./ravenclaw";
import { personnesHufflepuff, hufflepuff } from "./hufflepuff";
import { personnesSlytherin, slytherin } from "./slytherin";
import { displayAverage } from "./swapHouse";
import { houseBasics, charactersWidth } from "./house";
import { displayParchement } from "./parchement";
import { displayHover } from "./graphHover";
import { vifOrMvt, dobbyMvt } from "./animations-result";
import { initFilmsScroll } from "./testScroll";


let houseNow = "";
let people = "";
let houseData = "";
const divFilm = document.querySelector("#film")

//récupérer les informations de la bonne maison
function houseChoosen(house) {
  switch (house) {
    case "gryffindor":
      houseNow = "Gryffindor";
      people = personnesGryffindor;
      houseData = gryffindor;
      break;
    case "ravenclaw":
      houseNow = "Ravenclaw";
      people = personnesRavenclaw;
      houseData = ravenclaw;
      break;
    case "hufflepuff":
      houseNow = "Hufflepuff";
      people = personnesHufflepuff;
      houseData = hufflepuff;
      break;
    case "slytherin":
      houseNow = "Slytherin";
      people = personnesSlytherin;
      houseData = slytherin;
      break;

    default:
      break;
  }
}
let id = 1;

//afficher la page de la maison
export function displayResult(house) {
  //changer le fond de la page par l'image de la maison
  if (!document.body.classList.contains("intro")) {
    document.body.style.backgroundImage = `url(/img/fond-${house}.png)`;
  }

  //initialiser la bonne maison
  houseChoosen(house);

  //afficher le contenu de la maison (slogan, infos base, personnages principaux)
  houseBasics(houseData);

  //lancer la création de la partie films
  divFilm.innerHTML = "";

  //créer un article et les steps pour le changement de film
  const article = document.createElement("article");

  const step1 = document.createElement('div');
  step1.className = 'step';
  step1.setAttribute('data-step', '1');
  const step1Content = document.createElement('p');
  step1Content.textContent = 'STEP 1';
  step1.appendChild(step1Content);

  // Create the second step div
  const step2 = document.createElement('div');
  step2.className = 'step';
  step2.setAttribute('data-step', '2');
  const step2Content = document.createElement('p');
  step2Content.textContent = 'STEP 2';
  step2.appendChild(step2Content);

  // Create the third step div
  const step3 = document.createElement('div');
  step3.className = 'step';
  step3.setAttribute('data-step', '3');
  const step3Content = document.createElement('p');
  step3Content.textContent = 'STEP 3';
  step3.appendChild(step3Content);

  // Create the fourth step div
  const step4 = document.createElement('div');
  step4.className = 'step';
  step4.setAttribute('data-step', '4');
  const step4Content = document.createElement('p');
  step4Content.textContent = 'STEP 4';
  step4.appendChild(step4Content);

  // Create the fifth step div
  const step5 = document.createElement('div');
  step5.className = 'step';
  step5.setAttribute('data-step', '5');
  const step5Content = document.createElement('p');
  step5Content.textContent = 'ÉTAPE 5';
  step5.appendChild(step5Content);

  // Create the sixth step div
  const step6 = document.createElement('div');
  step6.className = 'step';
  step6.setAttribute('data-step', '6');
  const step6Content = document.createElement('p');
  step6Content.textContent = 'ÉTAPE 6';
  step6.appendChild(step6Content);

  // Create the seventh step div
  const step7 = document.createElement('div');
  step7.className = 'step';
  step7.setAttribute('data-step', '7');
  const step7Content = document.createElement('p');
  step7Content.textContent = 'ÉTAPE 7';
  step7.appendChild(step7Content);

  // Create the eighth step div
  const step8 = document.createElement('div');
  step8.className = 'step';
  step8.setAttribute('data-step', '8');
  const step8Content = document.createElement('p');
  step8Content.textContent = 'ÉTAPE 8';
  step8.appendChild(step8Content);

  article.append(step1, step2, step3, step4, step5, step6, step7, step8);

  const fixFigure = document.createElement("figure");
  divFilm.append(article, fixFigure);

  //créer la partie pour que les films changent
  initFilmsScroll(people, houseNow);
  
  //créer le graphique avec les 20 personnes les plus vues
  displayHover(people, houseNow);
  //afficher Dooby après 30 secondes sur le graphique
  dobbyMvt();

  //Créer le parchemin
  displayParchement(houseData);

  // créer les moyennes finales pour changer de maison
  displayAverage();

  //définit la taille pour le vif d'or
  charactersWidth();

  if (id == 2) {
    vifOrMvt();
  }
  id++;

}

// toutes les informations sur les films
export function titleFilm(num) {
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