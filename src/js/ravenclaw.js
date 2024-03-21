// @rollup/plugin-dsv
import characters from "../../data/HPCharactersData.csv";

let HPDataRow = characters.find((e) => e.Name === "Luna Lovegood");
let description1 = HPDataRow.Descr;
let HPDataRow2 = characters.find((e) => e.Name === "Gilderoy Lockhart");
let description2 = HPDataRow2.Descr;
let HPDataRow3 = characters.find((e) => e.Name === "Filius Flitwick");
let description3 = HPDataRow3.Descr;

const ravenclaw = {
    "quote" : "Ravenclaw, where those of wit and learning, will always find their kind!",
    "animal" : "Eagle",
    "element" : "Air",
    "colors" : "Blue and bronze",
    "traits" : "Intelligence, Wisdom, Creativity, Originality, Individuality, Acceptance",
    "founder" : "Rowena Ravenclaw",
    "main1" : {
        "name" : "Luna Lovegood",
        "descr" : description1,
        "img" : "../../assets/img/characters/luna-lovegood.png",
    },
    "main2" : {
        "name" : "Gilderoy Lockhart",
        "descr" : description2,
        "img" : "../../assets/img/characters/gilderoy-lockhart.png",
    },
    "main3" : {
        "name" : "Filius Flitwick",
        "descr" : description3,
        "img" : "../../assets/img/characters/filius-flitwick.png",
    },
};


const personnesRavenclaw = characters.filter((e) => e.School.match("ravenclaw"));

export {ravenclaw, personnesRavenclaw}