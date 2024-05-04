
const outerDiv = document.querySelector("#outer-parchement");

export function displayParchement(houseObj) {
    // const outerDiv = document.createElement('div');
    // outerDiv.className = 'outer-parchement';
    // outerDiv.style.backgroundImage = `url(../../assets/img/paper-parchment.png)`;
    // outerDiv.style.height = '1200px';
    // section.append(outerDiv);
    outerDiv.innerHTML = "";
    const innerDiv = document.createElement('div');
    innerDiv.className = 'inner-parchement';
    innerDiv.style.backgroundImage = `url(../../assets/img/Vector_${houseObj.parchement.houseMin}.png)`;
    innerDiv.style.width = '100%';
    outerDiv.appendChild(innerDiv);

    const houseName = document.createElement('h1');
    houseName.classList.add('parchment-title');
    houseName.textContent = `${houseObj.parchement.house}`;

    const p1 = document.createElement('p');
    p1.classList.add('parchment-p');
    p1.textContent = `${houseObj.parchement.house} has the reputation of producing ${houseObj.parchement.adjective1} and ${houseObj.parchement.adjective2} wizards and witches, but not all students from ${houseObj.parchement.houseMin} are ${houseObj.parchement.adjective3}.`;
    
    // Création du deuxième paragraphe
    const p2 = document.createElement('p');
    p2.classList.add('parchment-p');
    p2.textContent = `If you find yourself in ${houseObj.parchement.houseMin}, it's probably because you demonstrate ${houseObj.parchement.quality1}, ${houseObj.parchement.quality2}, and ${houseObj.parchement.quality3}.`;
    
    // Création du troisième paragraphe
    const p3 = document.createElement('p');
    p3.classList.add('parchment-p');
    p3.textContent = `Students from ${houseObj.parchement.houseMin} are known for ${houseObj.parchement.specificAction1}, even if they have to ${houseObj.parchement.specificAction2}.`;
    
    // Supposons que outerDiv est l'élément parent où vous souhaitez ajouter ces paragraphes
    innerDiv.appendChild(houseName);
    innerDiv.appendChild(p1);
    innerDiv.appendChild(p2);
    innerDiv.appendChild(p3);
}
