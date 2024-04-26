import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { displayResult } from "./displayAllInfos";

const section = document.querySelector("#house");

export function displayAverage() {
    const average = document.createElement("div");
    const averageTitle = document.createElement("h1");
    averageTitle.textContent = "Average screentime per House";
    averageTitle.classList.add("averageScreen");

    const averageInfo = document.createElement("p");
    averageInfo.textContent = "Click to see the others Houses";

    average.append(averageTitle, averageInfo);

    section.append(average);

    graphAverageScreen();
}


function graphAverageScreen() {
    //svg
    const donnees = [31, 29, 23, 17];

    console.log(donnees);
    const monSvg = select(".averageScreen")
        .append("svg")
        .attr("width", "90%")
        .attr("height", 500);

    const yScale = scaleLinear().domain([0, 40]).range([20, 500]);

    const barChart = monSvg
        .selectAll("rect")
        .data(donnees)
        .join((enter) =>
            enter
                .append("rect")
                .attr("x", (d, i) => i * 200)
                .attr("y", (d) => 500 - yScale(d))
                .attr("width", 100)
                .attr("height", (d, i) => yScale(d))
                .attr("class", "swapHouse")
        )
        .attr("fill", (d, i) => (i == 0 ? "var(--Gryffindor-primary-color)" : i == 1 ?
            "var(--Slytherin-primary-color)" : i == 2 ? "var(--Ravenclaw-primary-color)" : "var(--Hufflepuff-primary-color)"));

    // Crée des étiquettes de texte pour les noms des villes
    const labels = monSvg
        .selectAll("text")
        .data(donnees)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 200 + 30)
        .attr("y", (d, i) => 530 - yScale(d))
        .text((d) => `${d}%`);

    clicAverageScreen();
}

function clicAverageScreen() {
    const averageScreen = document.querySelector(".averageScreen svg");
    averageScreen.addEventListener("click", (e) => {
        const rect = e.target.closest("rect");
        if (rect) {
            const house = rect.getAttribute('fill').split("--")[1].split("-")[0].toLowerCase();
            displayResult(house);
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
        }
    })
}