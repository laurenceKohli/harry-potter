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
  const section = document.getElementById("questions");
   const questionElement = document.createElement("div");
   questionElement.innerHTML = `<h3>${questionsUser[id].question}</h3>`;

   console.log(questionsUser[id].reponse)
    const answersList = document.createElement("ul");

    for (const [key, value] of Object.entries(questionsUser[id].reponse)) {
      const answerItem = document.createElement("li");
      answerItem.textContent = key;
      answersList.appendChild(answerItem);
    }
 
    questionElement.appendChild(answersList);
    section.appendChild(questionElement);
}
