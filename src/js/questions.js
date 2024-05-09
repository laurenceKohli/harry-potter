import { displayResult } from "./displayAllInfos";
import { choixpeauMvt } from "./choixpeau";

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
        "Science and knowledge books (R)": "R",
        "Epic adventures (G)": "G",
        "Books on mysteries (S)": "S",
        "Tales and family stories (H)": "H",
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

export function answerChoosen(index, answer){
  console.log(questionsUser[index].reponse[answer]);
  const initalChoosen = questionsUser[index].reponse[answer]; 
  if(index == 6)  finalAnswer(initalChoosen)
}

function finalAnswer(initalChoosen){
  document.querySelector("#house").classList.add("active")
  document.querySelector("#question").classList.remove("active")
  document.querySelector("body").classList.remove("intro")
  document.querySelector("body").classList.add("fondhouse")
  displayResult(getfinalHouse(initalChoosen));
}

function getfinalHouse(initial){
  let house = "";
  switch (initial) {
    case "G" :
      house = "gryffindor";
      break;
    case "R" :
      house = "ravenclaw";
      break;
    case "H":
      house = "hufflepuff";
      break;
    case "S":
     house = "slytherin";
      break;

    default:
      break;
  }
  return house;
}
