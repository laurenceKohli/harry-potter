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
    "icon" : "/img/icon-house-ravenclaw.png",
    "bigIcon" : "/img/big-icon-house-ravenclaw.png",
    "animal" : "Eagle",
    "element" : "Air",
    "colors" : "Blue and bronze",
    "traits" : "Intelligence,<br> Wisdom,<br> Creativity,<br> Originality,<br> Individuality,<br> Acceptance",
    "founder" : "Rowena Ravenclaw",
    "main1" : {
        "name" : "Luna Lovegood",
        "descr" : description1,
        "img" : "/img/characters/luna-lovegood.png",
    },
    "main2" : {
        "name" : "Gilderoy Lockhart",
        "descr" : description2,
        "img" : "/img/characters/gilderoy-lockhart.png",
    },
    "main3" : {
        "name" : "Filius Flitwick",
        "descr" : description3,
        "img" : "/img/characters/filius-flitwick.png",
    },
    "parchement" : {
        "img" : "/img/Vector-ravenclaw.png",
        "house" : "Ravenclaw",
        "houseMin" : "ravenclaw", 
        "adjective1" : "intelligent" ,
        "adjective2" : "creative",
        "adjective3" : "wise",
        "quality1" : "individuality",
        "quality2" : "intelligence",
        "quality3" : "originality",
        "specificAction1" : "Acceptance of others",
        "specificAction2" : "Wisdom in decision-making",
    }
};


const personnesRavenclaw = characters.filter((e) => e.School.match("Ravenclaw"));

export {ravenclaw, personnesRavenclaw}