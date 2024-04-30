// @rollup/plugin-dsv
import characters from "../../data/HPCharactersData.csv";

let HPDataRow = characters.find((e) => e.Name === "Harry Potter");
let description1 = HPDataRow.Descr;
let HPDataRow2 = characters.find((e) => e.Name === "Hermione Granger");
let description2 = HPDataRow2.Descr;
let HPDataRow3 = characters.find((e) => e.Name === "Ron Weasley");
let description3 = HPDataRow3.Descr;

const gryffindor = {
    "quote" : "Gryffindor, where dwell the brave at heart!",
    "icon" : "../../assets/img/icon-house-gryffindor.png",
    "bigIcon" : "../../assets/img/big-icon-house-gryffindor.png",
    "animal" : "Lion",
    "element" : "Fire",
    "colors" : "Scarlet and gold",
    "traits" : "Daring,<br> Nerve,<br> Chivalry,<br> Courage,<br> Bravery,<br> Determination",
    "founder" : "Godric Gryffindor",
    "main1" : {
        "name" : "Harry Potter",
        "descr" : description1,
        "img" : "../../assets/img/characters/harry-potter.png",
    },
    "main2" : {
        "name" : "Hermione Granger",
        "descr" : description2,
        "img" : "../../assets/img/characters/hermione-granger.png",
    },
    "main3" : {
        "name" : "Ron Weasley",
        "descr" : description3,
        "img" : "../../assets/img/characters/ron-weasley.png",
    },
}

const personnesGryffindor = characters.filter((e) => e.School.match("Gryffindor"));

export {gryffindor, personnesGryffindor}