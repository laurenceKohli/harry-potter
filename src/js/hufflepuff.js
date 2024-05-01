// @rollup/plugin-dsv
import characters from "../../data/HPCharactersData.csv";

let HPDataRow = characters.find((e) => e.Name === "Cedric Diggory");
let description1 = HPDataRow.Descr;
let HPDataRow2 = characters.find((e) => e.Name === "Nymphadora Tonks");
let description2 = HPDataRow2.Descr;
let HPDataRow3 = characters.find((e) => e.Name === "Pomona Sprout");
let description3 = HPDataRow3.Descr;

const hufflepuff = {
    "quote" : "Where they are just and loyal, those patient Hufflepuffs are true, and unafraid of toil!",
    "icon" : "../../assets/img/icon-house-hufflepuff.png",
    "bigIcon" : "../../assets/img/big-icon-house-hufflepuff.png",
    "animal" : "Badger",
    "element" : "Earth",
    "colors" : "Yellow and black",
    "traits" : "Hard work,<br> Dedication,<br> Fairness,<br> Patience,<br> Loyalty,<br> Kindness",
    "founder" : "Helga Hufflepuff",
    "main1" : {
        "name" : "Cedric Diggory",
        "descr" : description1,
        "img" : "../../assets/img/characters/cedric-diggory.png",
    },
    "main2" : {
        "name" : "Nymphadora Tonks",
        "descr" : description2,
        "img" : "../../assets/img/characters/nymphadora-tonks.png",
    },
    "main3" : {
        "name" : "Pomona Sprout",
        "descr" : description3,
        "img" : "../../assets/img/characters/pomona-sprout.png",
    },
    "parchement" : {
        "img" : "../../assets/img/Vector-hufflepuff.png",
        "house" : "Hufflepuff",
        "houseMin" : "hufflepuff",
        "adjective1" : "patient",
        "adjective2" : "loyal",
        "adjective3" : "fair",
        "quality1" : "kindness",
        "quality2" : "dedication",
        "quality3" : "hard-work",
        "specificAction1" : "Loyalty to friends and family", 
        "specificAction2" : "Dedication to a cause that is important to them",
    }
};


const personnesHufflepuff = characters.filter((e) => e.School.match("Hufflepuff"));

export {hufflepuff, personnesHufflepuff}