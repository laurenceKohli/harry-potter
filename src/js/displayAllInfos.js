import { personnesGryffindor, gryffindor } from "./gryffindor";
import { personnesRavenclaw, ravenclaw } from "./ravenclaw";
import { personnesHufflepuff, hufflepuff } from "./hufflepuff";
import { personnesSlytherin, slytherin } from "./slytherin";
import { displayFilm } from "./film";
import { displayAverage } from "./swapHouse";
import { houseBasics, charactersWidth } from "./house";
import { displayHover } from "./graphHover";
import { vifOrMvt } from "./vifOr";

let houseNow = "";
let people = "";
let houseData = "";
const section = document.querySelector("#house");

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

export function displayResult(house){
    houseChoosen(house);

    section.innerHTML = "";
    if(!document.body.classList.contains("intro")){
      document.body.style.backgroundImage = `url(../../assets/img/fond-${house}.png)`;
    }

    houseBasics(houseData);
  
    const title = document.createElement("h1");
    title.textContent = `Screentime of the 3 most characters of each film for ${houseNow}`;

    section.append(title);

    displayFilm(1,people);

    displayHover(people, houseNow);

    displayAverage();

    charactersWidth();

    if(id == 2){
      vifOrMvt(id);
    }
    id++;

}

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