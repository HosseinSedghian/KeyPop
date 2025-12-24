export function goToNextPage(langsContainer, language) {
    const veryEasy = document.createElement("div");
    const easy = document.createElement("div");
    const normal = document.createElement("div");
    const hard = document.createElement("div");
    const veryHard = document.createElement("div");

    veryEasy.className = "gameLevel";
    easy.className = "gameLevel";
    normal.className = "gameLevel";
    hard.className = "gameLevel";
    veryHard.className = "gameLevel";

    if (language === "eng") {
        veryEasy.textContent = "Very Easy";
        easy.textContent = "Easy";
        normal.textContent = "Normal";
        hard.textContent = "Hard";
        veryHard.textContent = "Very Hard";
    }

    if (language === "fa") {
        veryEasy.textContent = "خیلی آسان";
        easy.textContent = "آسان";
        normal.textContent = "متوسط";
        hard.textContent = "سخت";
        veryHard.textContent = "خیلی سخت";
    }

    veryEasy.addEventListener("click", () => {
        window.location.href = "game.html?language=" + language + "&level=0";
    });
    easy.addEventListener("click", () => {
        window.location.href = "game.html?language=" + language + "&level=1";
    });
    normal.addEventListener("click", () => {
        window.location.href = "game.html?language=" + language + "&level=2";
    });
    hard.addEventListener("click", () => {
        window.location.href = "game.html?language=" + language + "&level=3";
    });
    veryHard.addEventListener("click", () => {
        window.location.href = "game.html?language=" + language + "&level=4";
    });

    langsContainer.appendChild(veryHard);
    langsContainer.appendChild(hard);
    langsContainer.appendChild(normal);
    langsContainer.appendChild(easy);
    langsContainer.appendChild(veryEasy);
}