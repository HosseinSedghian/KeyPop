const body = document.getElementById("body");
const langsContainer = document.createElement("div");
langsContainer.style.display = "flex";
langsContainer.style.flexDirection = "column";
langsContainer.style.justifyContent = "center";
langsContainer.style.alignItems = "center";
langsContainer.style.height = "100%";
body.appendChild(langsContainer);

const engDiv = document.createElement("div");
engDiv.textContent = "English";
engDiv.className = "langBox";
langsContainer.appendChild(engDiv);

const farDiv = document.createElement("div");
farDiv.textContent = "فارسی";
farDiv.className = "langBox";
langsContainer.appendChild(farDiv);