import filmTime from "../../data/Screen_Time_dos.csv";
import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { personnesGryffindor } from "./gryffindor";
import { personnesRavenclaw } from "./ravenclaw";
import { personnesHufflepuff } from "./hufflepuff";
import { personnesSlytherin } from "./slytherin";
import { graphOver } from "./graphHover";

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

export function displayHover(house = "gryffindor") {
  houseChoosen(house);

  const totalScreen = document.createElement("div");
  const titleTotal = document.createElement("h1");
  titleTotal.textContent = "Graph of the 20th more Screentimed characters";
  totalScreen.classList.add("totalScreen");

  totalScreen.append(titleTotal);

  const average = document.createElement("div");
  const averageTitle = document.createElement("h1");
  averageTitle.textContent = "Average screentime per House";
  averageTitle.classList.add("averageScreen");



  section.append(totalScreen, average);
  graphOver(people, houseNow);
}