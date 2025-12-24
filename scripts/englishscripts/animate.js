export function animate(bubbles, bubbleSize) {
    const container = document.getElementById("bubbles-container");
    const maxX = container.clientWidth - bubbleSize;
    const maxY = container.clientHeight - bubbleSize;

    for (const bubble of bubbles) {
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;

        if (bubble.x <= 0) {
            bubble.x = 0;
            bubble.vx = -1 * bubble.vx;
        }
        if (bubble.x >= maxX) {
            bubble.x = maxX;
            bubble.vx = -1 * bubble.vx;
        }
        if (bubble.y <= 0) {
            bubble.y = 0;
            bubble.vy = -1 * bubble.vy;
        }
        if (bubble.y >= maxY) {
            bubble.y = maxY;
            bubble.vy = -1 * bubble.vy;
        }
        bubble.newBox.style.transform = `translate(${bubble.x}px, ${bubble.y}px)`;
    }
}
