import {getRandomColor} from "./getRandomColor.js"
import {getRandomBetween} from "./getRandomBetween.js"
import {getRandomLetter} from "./getRandomLetter.js"

export function createBubble(bubbleSize, container) {
    const newBox = document.createElement("div");
    newBox.className = "bubble";

    newBox.style.width = `${bubbleSize}px`;
    newBox.style.height = `${bubbleSize}px`;

    const bubbleColor = getRandomColor();
    newBox.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.85), ${bubbleColor} 55%, rgba(0,0,0,0.15) 100%)`;

    const posX = getRandomBetween(0, container.clientWidth - bubbleSize);
    const posY = getRandomBetween(0, container.clientHeight - bubbleSize);

    const speedX = getRandomBetween(-1, 1);
    const speedY = getRandomBetween(-1, 1);

    newBox.style.display = "flex";
    newBox.style.justifyContent = "center";
    newBox.style.alignItems = "center";
    const randomLetter = getRandomLetter();
    newBox.textContent = randomLetter;
    newBox.style.fontSize = "2rem";

    let bubble = {
        newBox: newBox,
        x: posX,
        y: posY,
        vx: speedX,
        vy: speedY,
        letter: randomLetter
    };
    return bubble;
}