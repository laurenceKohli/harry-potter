const section = document.querySelector("#house");
import { gryffindor } from "./gryffindor";
import  { slytherin } from "./slytherin";
import { ravenclaw } from "./ravenclaw";
import { hufflepuff } from "./hufflepuff";


export function houseBasics(houseName) {
  switch (houseName) {
    case "gryffindor":
      houseName = gryffindor;
      break;
    case "ravenclaw":
      houseName = ravenclaw;
      break;
    case "slytherin":
      houseName = slytherin;
      break;
    case "hufflepuf":
      houseName = hufflepuff;
      break;
    default:
      break;
  }

  const div = document.createElement("div");
  div.classList.add("houseBasics");

  const title = document.createElement("h1");
  title.textContent = houseName.quote;
  const basic = document.createElement("div");
  basic.classList.add("basics");
  const animal = document.createElement("h2");
  animal.textContent = "Animal";
  const pAnimal = document.createElement("p");
  pAnimal.textContent = houseName.animal;

  const elem = document.createElement("h2");
  elem.textContent = "Element";
  const pElem = document.createElement("p");
  pElem.textContent = houseName.element;

  const color = document.createElement("h2");
  color.textContent = "Colors";
  const pColor = document.createElement("p");
  pColor.textContent = houseName.colors;

  const founder = document.createElement("h2");
  founder.textContent = "Founder";
  const pFounder = document.createElement("p");
  pFounder.textContent = houseName.founder;

  const trait = document.createElement("h2");
  trait.textContent = "Traits";
  const pTrait = document.createElement("p");
  pTrait.textContent = houseName.traits;

  basic.append(
    animal,
    pAnimal,
    elem,
    pElem,
    color,
    pColor,
    founder,
    pFounder,
    trait,
    pTrait
  );

  const char = document.createElement("div");
  char.classList.add("characters");
  //personnage principal 1
  const main1 = document.createElement("div");
  main1.classList.add("mainCharacter");
  const name1 = document.createElement("h2");
  name1.textContent = houseName.main1.name;
  const descr1 = document.createElement("p");
  descr1.textContent = houseName.main1.descr;
  const img1 = document.createElement("IMG");
  img1.src = houseName.main1.img;
  main1.append(img1, name1, descr1);

  //personnage principal 2
  const main2 = document.createElement("div");
  main2.classList.add("mainCharacter");
  const name2 = document.createElement("h2");
  name2.textContent = houseName.main2.name;
  const descr2 = document.createElement("p");
  descr2.textContent = houseName.main2.descr;
  const img2 = document.createElement("IMG");
  img2.src = houseName.main2.img;
  main2.append(img2, name2, descr2);

  //personnage principal 3
  const main3 = document.createElement("div");
  main3.classList.add("mainCharacter");
  const name3 = document.createElement("h2");
  name3.textContent = houseName.main3.name;
  const descr3 = document.createElement("p");
  descr3.textContent = houseName.main3.descr;
  const img3 = document.createElement("IMG");
  img3.src = houseName.main3.img;
  main3.append(img3, name3, descr3);

  char.append(main1, main2, main3);

  //ajouter au dom
  div.append(title, basic, char);
  section.append(div);
}
