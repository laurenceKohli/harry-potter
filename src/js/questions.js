import { displayResult } from "./displayAllInfos";
import { choixpeauMvt } from "./choixpeau";
import { max } from "d3-array";

export const questionsUser = {
  1: {
    question:
      "What environment do you prefer for studying or working?",
    reponse: {
      "A spacious room with friends": "G",
      "A silent library": "R",
      "A cozy corner at home": "H",
      "A private office with a view": "S",
    },
  },

  2: {
    question: "Which spell or potion intrigues you the most?",
    reponse: {
      "Shield Charm": "H",
      "Expecto Patronum": "R",
      "Polyjuice Potion": "S",
      "Patronus ": "G",
    },
  },

  3: {
    question: "What quality do you admire most in a person?",
    reponse: {
        "Ability to make tough decisions": "G",
        "Sense of initiative and leadership": "S",
        "Intellectual curiosity": "R",
        "Empathy towards others": "H",
    },
  },

  4: {
    question: "If you could talk to an animal, which one would you choose?",
    reponse: {
        "Fox": "S",
        "Dolphin": "H",
        "Owl": "R",
        "Wolf": "G",
    },
  },

  5: {
    question: "Which element of nature do you prefer?",
    reponse: {
        "Earth": "H",
        "Water": "S",
        "Fire": "G",
        "Air": "R",
    },
  },
  6: {
    question: "What kind of books attract you the most?",
    reponse: {
        "Science and knowledge books": "R",
        "Epic adventures": "G",
        "Books on mysteries": "S",
        "Tales and family stories": "H",
    },
  },
};

export function displayQuestion(id){
  const section = document.getElementById("question");
  section.innerHTML = "";
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = `/assets/img/questions/question-${id}.png`

  imageDiv.appendChild(image);

   const questionElement = document.createElement("div");
   questionElement.innerHTML = `<h3>${questionsUser[id].question}</h3>`;

    const answersList = document.createElement("ol");

    for (const [key, value] of Object.entries(questionsUser[id].reponse)) {
      const answerItem = document.createElement("li");
      answerItem.textContent = key;
      answersList.appendChild(answerItem);
    }
 
    questionElement.appendChild(answersList);

    const choixpeau = document.createElement("IMG");
  choixpeau.setAttribute('id', 'choixpeau');
  choixpeau.src = "../../assets/img/sorting_hat.png";

    section.append(imageDiv, questionElement, choixpeau);

    choixpeauMvt(id);
}

let gryf = 0;
let rave = 0;
let huff = 0;
let slyt = 0;

export function answerChoosen(index, answer){
  const initalChoosen = questionsUser[index].reponse[answer];
  console.log(initalChoosen);
  getHouse(initalChoosen);
  if(index == 6)  finalAnswer(initalChoosen)
}

function finalAnswer(initial){
  document.querySelector("#house").classList.add("active")
  document.querySelector("#question").classList.remove("active")
  document.querySelector("body").classList.remove("intro")
  document.querySelector("body").classList.add("fondhouse")
  displayResult(getfinalHouse(max([gryf, rave, huff, slyt]), initial));
}

function getHouse(initial){
    switch (initial) {
      case "G" :
        gryf++;
        break;
      case "R" :
        rave++;
        break;
      case "H":
        huff++;
        break;
      case "S":
        slyt++;
        break;
      default:
        break;
    }
  }

function getfinalHouse(max){
  let house = "";
  switch (max) {
    case gryf :
      house = "gryffindor";
      break;
    case rave :
      house = "ravenclaw";
      break;
    case huff:
      house = "hufflepuff";
      break;
    case slyt:
     house = "slytherin";
      break;

    default:
      break;
  }
  return house;
}
