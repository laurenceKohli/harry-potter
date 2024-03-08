const body = document.querySelector("body");
import { gryffindor } from "./gryffindor";

export function houseBasics(houseName){
    switch (houseName) {
        case "gryffindor" : 
            houseName = gryffindor;
            break;
        default : 
            break;
    }

    const div = document.createElement("div");
    div.classList.add("houseBasics");

    const title = document.createElement("h1");
    title.textContent = houseName.quote;

    //personnage principal 1
    const main1 = document.createElement("div");
    main1.classList.add("mainCharacter");
    const name1 = document.createElement("h2");
    name1.textContent = houseName.main1.name;
    const descr1 = document.createElement("p");
    descr1.textContent = houseName.main1.descr;
    const img1 = document.createElement("IMG");
    img1.src = houseName.main1.img;
    main1.append(img1, name1, descr1)

    //ajouter au dom
    div.append(title, main1);
    body.append(div);

}