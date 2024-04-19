// @rollup/plugin-dsv
import characters from "../../data/HPCharactersData.csv";

let HPDataRow = characters.find((e) => e.Name === "Severus Snape");
let description1 = HPDataRow.Descr;
let HPDataRow2 = characters.find((e) => e.Name === "Draco Malfoy");
let description2 = HPDataRow2.Descr;
let HPDataRow3 = characters.find((e) => e.Name === "Bellatrix Lestrange");
let description3 = HPDataRow3.Descr;

const slytherin = {
    "quote" : "Slytherin will help you on your way to greatness!",
    "animal" : "Snake",
    "element" : "Water",
    "colors" : "Green and silver",
    "traits" : "Ambition, Cunning, Leadership, Resourcefulness, Self-Preservation, Determination",
    "founder" : "Salazar Slytherin",
    "main1" : {
        "name" : "Severus Snape",
        "descr" : description1,
        "img" : "../../assets/img/characters/severus-snape.png",
    },
    "main2" : {
        "name" : "Draco Malfoy",
        "descr" : description2,
        "img" : "../../assets/img/characters/draco-malfoy.png",
    },
    "main3" : {
        "name" : "Bellatrix Lestrange",
        "descr" : description3,
        "img" : "../../assets/img/characters/bellatrix-lestrange.png",
    },
};


const personnesSlytherin = characters.filter((e) => e.School.match("Slytherin"));

export {slytherin, personnesSlytherin}