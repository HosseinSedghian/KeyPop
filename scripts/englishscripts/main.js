const bubbleSize = 75;
const bubbleCount = 20;
let expBubbles = 0;
let remainedBubbles = bubbleCount;
let timeLeft = 30;
const bubbles = [];

document.getElementById("expBubbles").innerHTML = expBubbles;
document.getElementById("remainedBubbles").innerHTML = remainedBubbles;
document.getElementById("timeSpan").innerHTML = timeLeft;

import {animate} from "./animate.js"
import {createBubble} from "./createBubble.js"

for (let i = 0; i < bubbleCount; i++) {
    const container = document.getElementById("bubbles-container");
    const bubble = createBubble(bubbleSize, container);
    container.appendChild(bubble.newBox);
    bubbles.push(bubble);
}

const animateRun = setInterval(animate, 0.1, bubbles, bubbleSize);
const countDown = setInterval(() => {
    timeLeft --;
    document.getElementById("timeSpan").innerHTML = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(countDown);
        if (bubbles.length > 0) {
            clearInterval(animateRun);
            const resultText = document.getElementById("resultText");
            resultText.style.display = "block"
            resultText.style.color = "red";
            resultText.textContent = "You Lose.";
        }
    }
}, 1000);

let keyPressCount = 0;
document.addEventListener("keydown", (e) => {
    if (bubbles.length === 0 || timeLeft <= 0) {
        return;
    }
    if (/^[a-zA-Z]$/.test(e.key)) {
        keyPressCount ++;
    }
    document.getElementById("keyPress").innerHTML = keyPressCount;
    const selectedKey = e.key;
    for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        if (b.letter === selectedKey) {
            b.newBox.remove();
            bubbles.splice(i, 1);
            expBubbles ++;
            remainedBubbles --;
            break;
        }
    }
    document.getElementById("expBubbles").innerHTML = expBubbles;
    document.getElementById("remainedBubbles").innerHTML = remainedBubbles;
    if (bubbles.length === 0) {
        const resultText = document.getElementById("resultText");
        resultText.style.display = "block"
        resultText.style.color = "green";
        resultText.textContent = "You Win.";
        clearInterval(countDown);
    }
});