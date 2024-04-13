const mainSection = document.querySelector("#house");
import { gryffindor } from "./gryffindor";
import  { slytherin } from "./slytherin";
import { ravenclaw } from "./ravenclaw";
import { hufflepuff } from "./hufflepuff";
import { Scene } from "scrollmagic";

let houseName = "";

export function houseBasics(name) {
  switch (name) {
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

  div.append(
    displayBasics(),
    displayMainCharacters()
  );
  //ajouter au dom
  mainSection.append(div);
}

function displayBasics(){
  const section = document.createElement("section");
  section.setAttribute('id', 'basics');

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

  section.append(title, basic);
  return section;
}

function displayMainCharacters(){
  const section = document.createElement("section");
  section.setAttribute('id', 'mainCharacters');

  const title = document.createElement("h2");
  title.textContent = "The 3 mains characters"

  const char = document.createElement("div");
  char.classList.add("characters");

  //personnage principal 1
  const main1 = document.createElement("div");
  main1.classList.add("mainCharacter");
  main1.setAttribute('id', 'first');
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
  main2.setAttribute('id', 'second');
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
  main3.setAttribute('id', 'third');
  const name3 = document.createElement("h2");
  name3.textContent = houseName.main3.name;
  const descr3 = document.createElement("p");
  descr3.textContent = houseName.main3.descr;
  const img3 = document.createElement("IMG");
  img3.src = houseName.main3.img;
  main3.append(img3, name3, descr3);

  char.append(main1, main2, main3);
  section.append(title, char);

  return section;
}

window.addEventListener('scroll', function() {
  const section = document.querySelector('#mainCharacters');
  const sectionTop = section.getBoundingClientRect().top;

  if(sectionTop < 0 && sectionTop > -1){
    document.querySelector(".characters").classList.add('inScroll');
    section.classList.add('fixed');
    document.querySelector('#mainCharacters > h2').classList.add('fixed');
    document.querySelector('#first').classList.add('fixed');
     //console.log(document.querySelector("#second").scrollTop )
     let topTo = 1002;
     let top2To = 1002;
     document.querySelector(".characters").addEventListener('scroll', function(e){
      topTo -= 10;
      if(topTo > 0){
        document.querySelector("#second").style.top = topTo+"px";
      } else {
        document.querySelector('#second').classList.add('fixed');
        top2To -= 10;
        if(top2To > 0){
          document.querySelector("#third").style.top = top2To+"px";
        } else {
          document.querySelector('#third').classList.add('fixed');
        }
      }    
     })
  }
});