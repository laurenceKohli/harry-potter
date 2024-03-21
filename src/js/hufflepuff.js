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
    "animal" : "Badger",
    "element" : "Earth",
    "colors" : "Yellow and black",
    "traits" : "Hard work, Dedication, Fairness, Patience, Loyalty, Kindness",
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
};


const personnesHufflepuff = characters.filter((e) => e.School.match("hufflepuff"));

export {hufflepuff, personnesHufflepuff}