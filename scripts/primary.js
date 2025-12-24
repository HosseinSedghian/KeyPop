import {goToNextPage} from "./secondary.js"

const body = document.getElementById("body");
const langsContainer = document.createElement("div");
langsContainer.id = "langsContainer";
body.appendChild(langsContainer);

const engDiv = document.createElement("div");
engDiv.textContent = "English";
engDiv.className = "langBox";
engDiv.addEventListener("click", () => {
    langsContainer.replaceChildren();
    goToNextPage(langsContainer, "eng");
});
langsContainer.appendChild(engDiv);

const farDiv = document.createElement("div");
farDiv.textContent = "فارسی";
farDiv.className = "langBox";
farDiv.addEventListener("click", () => {
    langsContainer.replaceChildren();
    goToNextPage(langsContainer, "fa");
});
langsContainer.appendChild(farDiv);